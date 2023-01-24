module.exports = {
	plugins: {
	tailwindcss: {
		content: [
			"./index.php",
			"./**/*.js",
		],
		theme: {
		extend: {},
		},
		plugins: [
			require('@tailwindcss/forms'),
		],
	},
	autoprefixer: {},
	},
}
