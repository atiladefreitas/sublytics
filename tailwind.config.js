/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extends: {
			colors: {
				dark: "#1B1D1F",
			},
		},
		animation: {
			shimmer: "shimmer 2s linear infinite",
		},
		keyframes: {
			shimmer: {
				from: {
					backgroundPosition: "0 0",
				},
				to: {
					backgroundPosition: "-200% 0",
				},
			},
		},
	},
	plugins: [],
});
