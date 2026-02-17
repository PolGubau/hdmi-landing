// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import metaTags from "astro-meta-tags";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://polgubau.com",
  prefetch: true,
  experimental: {
    headingIdCompat: true,
    contentIntellisense: true,
  },
  i18n: {
    locales: ["es", "ca", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap(),
    metaTags(),
    react({ experimentalReactChildren: true }),
    icon(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
