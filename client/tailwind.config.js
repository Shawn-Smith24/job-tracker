/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#273248",
				secondary: "#69758C ",
				accent: "#e88060",
				info: "#D46915",
			},
		},
	},
	plugins: [],
};

// COLOR PALETTE POTENTIALS:
// Primary: #2C3E50, Secondary: #E74C3C, Accent: #F7DC6F
// Primary: #34495E, Secondary: #1ABC9C, Accent: #F1C40F
// Primary: #2980B9, Secondary: #27AE60, Accent: #E67E22
// Primary: #F39C12, Secondary: #16A085, Accent: #3498DB
// Primary: #9B59B6, Secondary: #2C3E50, Accent: #F39C12
// Primary: #3498DB, Secondary: #2980B9, Accent: #2C3E50
// Primary: #1ABC9C, Secondary: #F1C40F, Accent: #34495E
// Primary: #E74C3C, Secondary: #F7DC6F, Accent: #2C3E50
// Primary: #2ECC71, Secondary: #F39C12, Accent: #9B59B6
// Primary: #27AE60, Secondary: #E74C3C, Accent: #F1C40F
