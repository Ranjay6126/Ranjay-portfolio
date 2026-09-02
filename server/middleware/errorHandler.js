/**
 * Global error handling middleware
 * Catches all errors and provides appropriate responses
 */

const errorHandler = (err, req, res, next) => {
  const isDevelopment = process.env.NODE_ENV === "development";

  // Default error status and message
  let statusCode = err.statusCode || res.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // MongoDB validation errors
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = "Validation Error";
    const errors = Object.values(err.errors).map((e) => ({
      field: e.path,
      message: e.message,
    }));

    return res.status(statusCode).json({
      success: false,
      message,
      ...(isDevelopment && { errors }),
    });
  }

  // MongoDB duplicate key error
  if (err.code === 11000) {
    statusCode = 400;
    message = "Duplicate field value entered";
  }

  // JWT errors (if added in future)
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expired";
  }

  // Log error
  if (statusCode >= 500) {
    console.error(`[ERROR] ${statusCode}: ${message}`);
    if (isDevelopment) {
      console.error(err.stack);
    }
  }

  // Send response
  res.status(statusCode).json({
    success: false,
    message,
    ...(isDevelopment && { error: err.message, stack: err.stack }),
  });
};

export default errorHandler;

