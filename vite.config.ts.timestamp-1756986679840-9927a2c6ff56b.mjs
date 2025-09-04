// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///home/project/node_modules/lovable-tagger/dist/index.js";
import ViteSitemapPlugin from "file:///home/project/node_modules/vite-plugin-sitemap/dist/index.js";
var __vite_injected_original_dirname = "/home/project";
var routes = [
  "/",
  "/components",
  "/components/button",
  "/components/checkbox",
  "/components/input",
  "/components/card",
  "/components/navigation-menu",
  "/components/avatar",
  "/components/badge",
  "/components/alert",
  "/components/tabs",
  "/components/progress",
  "/components/switch",
  "/components/slider",
  "/icons",
  "/docs"
];
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    ViteSitemapPlugin({
      hostname: "https://l1ar.vercel.app",
      routes,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: /* @__PURE__ */ new Date(),
      readable: true
    }),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcbmltcG9ydCBWaXRlU2l0ZW1hcFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zaXRlbWFwJ1xuXG4vLyBEZWZpbmUgeW91ciByb3V0ZXNcbmNvbnN0IHJvdXRlcyA9IFtcbiAgJy8nLFxuICAnL2NvbXBvbmVudHMnLFxuICAnL2NvbXBvbmVudHMvYnV0dG9uJyxcbiAgJy9jb21wb25lbnRzL2NoZWNrYm94JyxcbiAgJy9jb21wb25lbnRzL2lucHV0JywgXG4gICcvY29tcG9uZW50cy9jYXJkJyxcbiAgJy9jb21wb25lbnRzL25hdmlnYXRpb24tbWVudScsXG4gICcvY29tcG9uZW50cy9hdmF0YXInLFxuICAnL2NvbXBvbmVudHMvYmFkZ2UnLFxuICAnL2NvbXBvbmVudHMvYWxlcnQnLFxuICAnL2NvbXBvbmVudHMvdGFicycsXG4gICcvY29tcG9uZW50cy9wcm9ncmVzcycsXG4gICcvY29tcG9uZW50cy9zd2l0Y2gnLFxuICAnL2NvbXBvbmVudHMvc2xpZGVyJyxcbiAgJy9pY29ucycsXG4gICcvZG9jcydcbl07XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVNpdGVtYXBQbHVnaW4oe1xuICAgICAgaG9zdG5hbWU6ICdodHRwczovL2wxYXIudmVyY2VsLmFwcCcsXG4gICAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICAgIGNoYW5nZWZyZXE6ICd3ZWVrbHknLFxuICAgICAgcHJpb3JpdHk6IDAuNyxcbiAgICAgIGxhc3Rtb2Q6IG5ldyBEYXRlKCksXG4gICAgICByZWFkYWJsZTogdHJ1ZSxcbiAgICB9KSxcbiAgICBtb2RlID09PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgY29tcG9uZW50VGFnZ2VyKCksXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG59KSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8sdUJBQXVCO0FBSjlCLElBQU0sbUNBQW1DO0FBT3pDLElBQU0sU0FBUztBQUFBLEVBQ2I7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjtBQUdBLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGtCQUFrQjtBQUFBLE1BQ2hCLFVBQVU7QUFBQSxNQUNWO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUEsTUFDVixTQUFTLG9CQUFJLEtBQUs7QUFBQSxNQUNsQixVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsSUFDRCxTQUFTLGlCQUNULGdCQUFnQjtBQUFBLEVBQ2xCLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDaEIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
