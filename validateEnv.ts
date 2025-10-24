/**
 * Simple runtime environment variable validator.
 * Ensures essential configuration values are defined before app boot.
 */

const REQUIRED_ENV_VARS = [
  "MONGODB_URI",
  "NEXT_PUBLIC_BASE_URL",
  "NEXTAUTH_SECRET",
];

export function validateEnv(): void {
  const missing = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    // eslint-disable-next-line no-console
    console.warn(
      `[env-check] Missing environment variables: ${missing.join(", ")}`
    );
  } else {
    // eslint-disable-next-line no-console
    console.log("[env-check] All required environment variables found ✅");
  }
}

// Run automatically when file is imported in dev mode
if (process.env.NODE_ENV !== "production") {
  validateEnv();
}
