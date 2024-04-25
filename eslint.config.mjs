import prettier from "prettier";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default [
	...tseslint.configs.recommended,
	{
		files: ["src/**/*.{ts,tsx}"],
		plugins: {
			prettier,
		},
		...js.configs.recommended,
		rules: {
			semi: "error",
		},
	},
	{
		ignores: ["**/*.config.{js,mjs}", "dist/", "**/definition.ts"],
	},
];
