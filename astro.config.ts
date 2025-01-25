import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

export default defineConfig({
  // used to generate images
  site: 'https://raquelfishes.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true }), tailwind(), icon()],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});