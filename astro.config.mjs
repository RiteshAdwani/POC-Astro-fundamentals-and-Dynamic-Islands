// @ts-check
import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [react(), vue()],

  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
    },
  },

  env: {
    schema: {
      GITHUB_TOKEN: envField.string({ context: "server", access: "secret" }),
      GITHUB_USERNAME: envField.string({ context: "server", access: "secret" }),
    },
  },

  adapter: netlify(),
});