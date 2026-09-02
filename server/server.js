import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
import { securityHeaders, compressionMiddleware, apiRateLimiter } from "./middleware/security.js";
import validateEnvironment from "./utils/env-validator.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Validate environment variables
  validateEnvironment();

  // Connect to database
  await connectDB();

  // Security middleware - must be early
  app.use(securityHeaders);
  app.use(compressionMiddleware);

  // Request logging (development and production)
  const morganFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
  app.use(morgan(morganFormat));

  // Rate limiting for API
  app.use("/portfolio-api/", apiRateLimiter);

  // CORS configuration
  const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
  app.use(
    cors({
      origin: clientUrl,
      credentials: true,
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type"],
    })
  );

  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check endpoint
  app.get("/portfolio-api/status", (req, res) => {
    res.json({
      success: true,
      message: "Portfolio service is running",
      timestamp: new Date().toISOString(),
    });
  });

  // API routes
  app.use("/portfolio-api/profile", portfolioRoutes);
  app.use("/portfolio-api/messages", contactRoutes);

  // Serve static files in production
  if (process.env.NODE_ENV === "production") {
    const clientDist = path.join(__dirname, "..", "client", "dist");
    app.use(express.static(clientDist, { maxAge: "1d" }));

    // SPA routing fallback
    app.get("*", (req, res, next) => {
      if (req.path.startsWith("/portfolio-api")) return next();
      res.sendFile(path.join(clientDist, "index.html"));
    });
  }

  // 404 error handler
  app.use((req, res, next) => {
    res.status(404);
    next(new Error(`Not found - ${req.originalUrl}`));
  });

  // Error handling middleware (must be last)
  app.use(errorHandler);

  // Start server
  const server = app.listen(PORT, () => {
    console.log(`\n✓ Server running on http://localhost:${PORT}`);
    console.log(`  Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`  CORS Origin: ${clientUrl}\n`);
  });

  // Handle server errors
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(
        `\n❌ Port ${PORT} is already in use.\n` +
          `Another server instance is likely still running.\n\n` +
          `Fix (PowerShell):\n` +
          `  netstat -ano | findstr :${PORT}\n` +
          `  taskkill /PID <PID> /F\n\n` +
          `Or stop the other terminal running the server.\n`
      );
      process.exit(1);
    }
    throw err;
  });

  // Handle graceful shutdown
  process.on("SIGTERM", () => {
    console.log("\n[Server] SIGTERM received, shutting down gracefully...");
    server.close(() => {
      console.log("[Server] Server closed");
      process.exit(0);
    });
  });

  process.on("SIGINT", () => {
    console.log("\n[Server] SIGINT received, shutting down gracefully...");
    server.close(() => {
      console.log("[Server] Server closed");
      process.exit(0);
    });
  });
};

startServer().catch((err) => {
  console.error("Failed to start server:", err.message);
  process.exit(1);
});
