// eslint.config.js (or .eslintrc.js if using CommonJS)
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig({
  files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
  languageOptions: {
    globals: globals.browser,
  },
  plugins: [],
  extends: [
    "next/core-web-vitals", // Next.js recommended rules
    "eslint:recommended", // General JS best practices
    "plugin:@typescript-eslint/recommended", // If using TypeScript
    "prettier" // Integrate with Prettier (optional)
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-console": "warn"
  }
});
