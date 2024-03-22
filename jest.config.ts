import type { Config } from "jest";

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
const config: Config = {
	clearMocks: true,
	globals: {
		fetch,
	},
	testEnvironment: "jsdom",
	testMatch: ["**/__tests__/**/*.[jt]s?(x)"],
	verbose: true,
};

export default config;
