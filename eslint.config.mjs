import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default [
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    ...js.configs.recommended,
    rules: {
      "prefer-const": "error",
      "max-params": ["error", { max: 3 }],
    },
  },
  {
    ignores: ["**/*.config.{js,mjs}", "dist/", "**/definition.ts"],
  },
  eslintPluginPrettierRecommended,
];
