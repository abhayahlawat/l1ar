import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import ViteSitemapPlugin from 'vite-plugin-sitemap'

// Define your routes
const routes = [
  '/',
  '/components',
  '/components/button',
  '/components/checkbox',
  '/components/input', 
  '/components/card',
  '/components/navigation-menu',
  '/components/avatar',
  '/components/badge',
  '/components/alert',
  '/components/tabs',
  '/components/progress',
  '/components/switch',
  '/components/slider',
  '/icons',
  '/docs'
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ViteSitemapPlugin({
      hostname: 'https://l1ar.vercel.app',
      routes: routes,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      readable: true,
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));