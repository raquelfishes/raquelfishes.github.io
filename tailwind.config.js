/** @type {import('tailwindcss').Config} */
import colors from './src/styles/colors.json'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				light: colors.light,
				dark: colors.dark
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'), // Añade el plugin de typography
	],
}
