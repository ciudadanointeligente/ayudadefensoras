// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "pt"],
    routing: {
      prefixDefaultLocale: false
    },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [alpinejs()],

  redirects: {
    "/": "/es/",
  },

  adapter: netlify(),
});