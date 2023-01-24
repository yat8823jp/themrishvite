/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./*.php",
		"./assets/**/*.js",
		"./assets/*.js",
	],
	theme: {
		spacing: {
			'1': '8px',
			'2': '16px',
			'3': '24px',
			'4': '32px',
			'5': '40px',
			'6': '48px',
		},
		extend: {},
	},
	plugins: [],
}
