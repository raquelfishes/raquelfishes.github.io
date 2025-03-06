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
			},
            typography: (theme) => ({
              DEFAULT: {
                css: {
                  color: theme('colors.light.text_page'), // Color de texto en modo claro
                  h2: {
                    color: theme('colors.light.text_page'), // Color de texto de h1 en modo claro
                  },
                  h3: {
                    color: theme('colors.light.text_page'), // Color de texto de h1 en modo claro
                  },
                  a: {
                    color: theme('colors.light.primary'), // Color de enlaces en modo claro
                    '&:hover': {
                      color: theme('colors.light.secondary'), // Color de enlaces al pasar el mouse en modo claro
                    },
                  },
                },
              },
              dark: {
                css: {
                  color: theme('colors.dark.text_page'), // Color de texto en modo oscuro
                  h2: {
                    color: theme('colors.dark.text_page'), // Color de texto de h1 en modo claro
                  },
                  h3: {
                    color: theme('colors.dark.text_page'), // Color de texto de h1 en modo claro
                  },
                  a: {
                    color: theme('colors.dark.primary'), // Color de enlaces en modo oscuro
                    '&:hover': {
                      color: theme('colors.dark.secondary'), // Color de enlaces al pasar el mouse en modo oscuro
                    },
                  },
                },
              },
            }),
          },
        },
	plugins: [
		require('@tailwindcss/typography'), // Añade el plugin de typography
	],
}
