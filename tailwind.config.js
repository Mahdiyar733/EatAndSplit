/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				blu: "#B8F4F0",
				Dblu: "#13293D",
				orng: "#E6C79C",
			},
			fontFamily: {
				konit: "kanit",
			},
		},
	},
	plugins: [require("daisyui")],
};
