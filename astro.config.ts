import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

<<<<<<< HEAD
import preact from '@astrojs/preact';
=======
import partytown from '@astrojs/partytown';
>>>>>>> source

export default defineConfig({
  // used to generate images
  site: 'https://raquelfishes.github.io',
  trailingSlash: 'ignore',
<<<<<<< HEAD
  integrations: [sitemap(), tailwind(), icon(), preact()],
=======
  integrations: [sitemap(), tailwind(), icon(), partytown()],
>>>>>>> source
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});