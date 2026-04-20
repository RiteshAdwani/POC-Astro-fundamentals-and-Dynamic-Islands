// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [react(), vue()],
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({ context: "server", access: "secret" }),
    },
  },
});