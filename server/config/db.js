import mongoose from "mongoose";

export let dbConnected = false;

/**
 * Retry connection with exponential backoff
 * Starts with 1s delay, increases exponentially up to 30s
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const connectWithRetry = async (uri, maxRetries = 5) => {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const delayMs = Math.min(1000 * Math.pow(2, attempt - 1), 30000);

      if (attempt > 1) {
        console.log(`[MongoDB] Retry attempt ${attempt}/${maxRetries} in ${delayMs / 1000}s...`);
        await sleep(delayMs);
      }

      const conn = await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        // Connection pooling configuration
        maxPoolSize: 10,
        minPoolSize: 2,
        // Retry configuration
        retryWrites: true,
        retryReads: true,
        // Connection compression
        compressors: ["snappy"],
      });

      console.log(`✓ MongoDB connected successfully: ${conn.connection.host}`);
      dbConnected = true;
      return conn;
    } catch (error) {
      lastError = error;
      console.error(`❌ MongoDB connection attempt ${attempt}/${maxRetries} failed:`, error.message);

      if (attempt === maxRetries) {
        console.error(
          `\n⚠️  MongoDB connection failed after ${maxRetries} attempts.\n` +
            `Portfolio API will be unavailable until MongoDB is started.\n` +
            `Make sure:\n` +
            `  1. MongoDB is running locally (port 27017) or\n` +
            `  2. MongoDB Atlas connection string is set in MONGODB_URI\n` +
            `  3. Network connectivity is available\n`
        );
        dbConnected = false;
        return null;
      }
    }
  }

  throw lastError;
};

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";

  try {
    console.log("[MongoDB] Attempting to connect...");
    console.log(`[MongoDB] URI: ${uri.replace(/password[^@]*@/, "password:***@")}`); // Hide password in logs

    const conn = await connectWithRetry(uri);

    if (conn) {
      dbConnected = true;
      return conn;
    }
  } catch (error) {
    console.error("[MongoDB] Critical connection error:", error.message);
    dbConnected = false;
    // Don't exit process - API can still respond for status checks
    // Portfolio endpoints will return 503 until DB is available
  }
};

// Listen for connection events
mongoose.connection.on("connected", () => {
  console.log("[MongoDB] Connection established");
  dbConnected = true;
});

mongoose.connection.on("disconnected", () => {
  console.warn("[MongoDB] Connection disconnected");
  dbConnected = false;
});

mongoose.connection.on("error", (err) => {
  console.error("[MongoDB] Connection error:", err.message);
  dbConnected = false;
});

export default connectDB;

