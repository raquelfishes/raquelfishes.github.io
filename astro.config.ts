import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import partytown from '@astrojs/partytown';
import preact from '@astrojs/preact';

export default defineConfig({
  // used to generate images
  site: 'https://raquelfishes.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap(), tailwind(), icon(), partytown(), preact()],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});