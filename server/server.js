import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import { ensureSeeded } from "./utils/ensureSeeded.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  await ensureSeeded();

  app.use(
    cors({
      origin: process.env.CLIENT_URL || "http://localhost:5173",
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/health", (req, res) => {
    res.json({ success: true, message: "Portfolio API is running" });
  });

  app.use("/api/portfolio", portfolioRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/api/chat", chatRoutes);

  if (process.env.NODE_ENV === "production") {
    const clientDist = path.join(__dirname, "..", "client", "dist");
    app.use(express.static(clientDist));
    app.get("*", (req, res, next) => {
      if (req.path.startsWith("/api")) return next();
      res.sendFile(path.join(clientDist, "index.html"));
    });
  }

  app.use((req, res, next) => {
    res.status(404);
    next(new Error(`Not found - ${req.originalUrl}`));
  });

  app.use(errorHandler);

  const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(
        `\nPort ${PORT} is already in use.\n` +
          `Another server instance is likely still running.\n\n` +
          `Fix (PowerShell):\n` +
          `  netstat -ano | findstr :${PORT}\n` +
          `  taskkill /PID <PID> /F\n\n` +
          `Or stop the other terminal running "npm run dev" / "npm run server".\n`
      );
      process.exit(1);
    }
    throw err;
  });
};

startServer().catch((err) => {
  console.error("Failed to start server:", err.message);
  process.exit(1);
});
