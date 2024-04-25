import type { Config } from "tailwindcss";
import { theme } from "./src/stories/style/theme";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme,
	plugins: [],
};

export default config;