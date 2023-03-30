/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#273248",
				secondary: "#69758C ",
				info: "#F0F0F0",
				accent: "#e88060",
				modal: "#0e1219d9",
			},
			fontFamily: {
				display: ["Yeseva One", "cursive"],
			},
		},
	},
	plugins: [],
};
