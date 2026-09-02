/**
 * Environment variable validation utility
 * Ensures all required environment variables are set before server startup
 */

const REQUIRED_ENV_VARS = {
  PORT: { default: "5000", type: "number" },
  NODE_ENV: { default: "development", type: "string" },
  MONGODB_URI: { required: false, type: "string" },
  CLIENT_URL: { required: false, type: "string" },
  SMTP_HOST: { required: false, type: "string" },
  SMTP_PORT: { required: false, type: "number" },
  SMTP_USER: { required: false, type: "string" },
  SMTP_PASS: { required: false, type: "string" },
  CONTACT_EMAIL: { required: false, type: "string" },
  CONTACT_RECEIVER: { required: false, type: "string" },
};

const ENV_VALIDATION_RULES = {
  PORT: {
    validate: (val) => {
      const num = parseInt(val, 10);
      return num > 0 && num <= 65535;
    },
    errorMsg: "PORT must be a number between 1 and 65535",
  },
  NODE_ENV: {
    validate: (val) => ["development", "production", "test"].includes(val),
    errorMsg: "NODE_ENV must be 'development', 'production', or 'test'",
  },
  MONGODB_URI: {
    validate: (val) => val.startsWith("mongodb://") || val.startsWith("mongodb+srv://"),
    errorMsg: "MONGODB_URI must be a valid MongoDB connection string",
  },
  SMTP_PORT: {
    validate: (val) => {
      const num = parseInt(val, 10);
      return num > 0 && num <= 65535;
    },
    errorMsg: "SMTP_PORT must be a number between 1 and 65535",
  },
};

export const validateEnvironment = () => {
  const errors = [];
  const warnings = [];

  for (const [key, config] of Object.entries(REQUIRED_ENV_VARS)) {
    const value = process.env[key] || config.default;

    // Check if required variable is missing
    if (!value && config.required !== false && !config.default) {
      errors.push(`Required environment variable missing: ${key}`);
      continue;
    }

    // Apply validation rules if defined
    if (value && ENV_VALIDATION_RULES[key]) {
      const rule = ENV_VALIDATION_RULES[key];
      if (!rule.validate(value)) {
        errors.push(`${key}: ${rule.errorMsg}`);
      }
    }

    // Warnings for optional variables
    if (!value && config.required === false) {
      if (key.startsWith("SMTP") || key.includes("EMAIL")) {
        warnings.push(`Optional: ${key} not set - Email notifications will be disabled`);
      }
    }
  }

  // Log validation results
  if (errors.length > 0) {
    console.error("\n❌ Environment Validation Failed:");
    console.error("================================");
    errors.forEach((err) => console.error(`  - ${err}`));
    console.error("================================\n");
    process.exit(1);
  }

  if (warnings.length > 0) {
    console.warn("\n⚠️  Environment Warnings:");
    console.warn("========================");
    warnings.forEach((warn) => console.warn(`  - ${warn}`));
    console.warn("========================\n");
  }

  console.log("✓ Environment validation passed\n");
  return true;
};

export default validateEnvironment;
