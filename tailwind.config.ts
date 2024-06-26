import type { Config } from "tailwindcss";
import { theme } from "./src/style/theme";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme,
	plugins: [],
};

export default config;