// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/guszf/OneDrive/%C3%81rea%20de%20Trabalho/PROJETOS/3%20-%20FTtech/Cam%20Player/node_modules/vite/dist/node/index.js";
import react from "file:///mnt/c/Users/guszf/OneDrive/%C3%81rea%20de%20Trabalho/PROJETOS/3%20-%20FTtech/Cam%20Player/node_modules/@vitejs/plugin-react/dist/index.mjs";

// plugin.js
function rollupReplaceWord({ from: from2, to: to2 }) {
  return {
    name: "transform-file",
    transform(src, id) {
      let code = src.replace(new RegExp(`${from2}\\.`, "g"), to2 + ".");
      if (to2 === "browser") {
        code = code.replace(/chrome\.action|browser.action/g, "browser.browserAction");
      }
      return {
        code,
        map: null
      };
    }
  };
}

// vite.config.js
console.log("process ===> ", process.env.BROWSER, process.env.NODE_ENV);
var isChrome = process.env.BROWSER === void 0 ? true : process.env.BROWSER === "chrome";
var from = isChrome ? "browser" : "chrome";
var to = isChrome ? "chrome" : "browser";
var vite_config_default = defineConfig({
  plugins: [
    {
      ...rollupReplaceWord({ from, to }),
      enforce: "pre"
    },
    react()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicGx1Z2luLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL21udC9jL1VzZXJzL2d1c3pmL09uZURyaXZlL1x1MDBDMXJlYSBkZSBUcmFiYWxoby9QUk9KRVRPUy8zIC0gRlR0ZWNoL0NhbSBQbGF5ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvYy9Vc2Vycy9ndXN6Zi9PbmVEcml2ZS9cdTAwQzFyZWEgZGUgVHJhYmFsaG8vUFJPSkVUT1MvMyAtIEZUdGVjaC9DYW0gUGxheWVyL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvYy9Vc2Vycy9ndXN6Zi9PbmVEcml2ZS8lQzMlODFyZWElMjBkZSUyMFRyYWJhbGhvL1BST0pFVE9TLzMlMjAtJTIwRlR0ZWNoL0NhbSUyMFBsYXllci92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyByb2xsdXBSZXBsYWNlV29yZCB9IGZyb20gJy4vcGx1Z2luJztcblxuY29uc29sZS5sb2coJ3Byb2Nlc3MgPT09PiAnLCBwcm9jZXNzLmVudi5CUk9XU0VSLCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XG5jb25zdCBpc0Nocm9tZSA9IHByb2Nlc3MuZW52LkJST1dTRVIgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBwcm9jZXNzLmVudi5CUk9XU0VSID09PSAnY2hyb21lJztcbmNvbnN0IGZyb20gPSBpc0Nocm9tZSA/ICdicm93c2VyJyA6ICdjaHJvbWUnOyAvLyB0aGlzIHZhciBmb3IgcmVwbGFjZVdvcmQgcGx1Z2luXG5jb25zdCB0byA9IGlzQ2hyb21lID8gJ2Nocm9tZScgOiAnYnJvd3Nlcic7IC8vIHRoaXMgdmFyIGZvciByZXBsYWNlV29yZCBwbHVnaW5cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB7XG4gICAgICAuLi5yb2xsdXBSZXBsYWNlV29yZCh7IGZyb20sIHRvIH0pLFxuICAgICAgZW5mb3JjZTogJ3ByZSdcbiAgICB9LFxuICAgIHJlYWN0KClcbiAgXVxufSk7IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvZ3VzemYvT25lRHJpdmUvXHUwMEMxcmVhIGRlIFRyYWJhbGhvL1BST0pFVE9TLzMgLSBGVHRlY2gvQ2FtIFBsYXllclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL2d1c3pmL09uZURyaXZlL1x1MDBDMXJlYSBkZSBUcmFiYWxoby9QUk9KRVRPUy8zIC0gRlR0ZWNoL0NhbSBQbGF5ZXIvcGx1Z2luLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvYy9Vc2Vycy9ndXN6Zi9PbmVEcml2ZS8lQzMlODFyZWElMjBkZSUyMFRyYWJhbGhvL1BST0pFVE9TLzMlMjAtJTIwRlR0ZWNoL0NhbSUyMFBsYXllci9wbHVnaW4uanNcIjtleHBvcnQgZnVuY3Rpb24gcm9sbHVwUmVwbGFjZVdvcmQoeyBmcm9tLCB0byB9KSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3RyYW5zZm9ybS1maWxlJyxcblxuICAgIHRyYW5zZm9ybShzcmMsIGlkKSB7XG4gICAgICAvLyAgY29uc29sZS5sb2coIGlkKTsgcGF0aCArIGZpbGVuYW1lXG5cbiAgICAgIGxldCBjb2RlID0gc3JjLnJlcGxhY2UobmV3IFJlZ0V4cChgJHtmcm9tfVxcXFwuYCwgJ2cnKSwgdG8gKyAnLicpO1xuXG4gICAgICBpZiAodG8gPT09ICdicm93c2VyJykge1xuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKC9jaHJvbWVcXC5hY3Rpb258YnJvd3Nlci5hY3Rpb24vZywgJ2Jyb3dzZXIuYnJvd3NlckFjdGlvbicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2RlLFxuICAgICAgICBtYXA6IG51bGwgLy8gcHJvdmlkZSBzb3VyY2UgbWFwIGlmIGF2YWlsYWJsZVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBa2EsU0FBUyxvQkFBb0I7QUFDL2IsT0FBTyxXQUFXOzs7QUNENlksU0FBUyxrQkFBa0IsRUFBRSxNQUFBQSxPQUFNLElBQUFDLElBQUcsR0FBRztBQUN0YyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFFTixVQUFVLEtBQUssSUFBSTtBQUdqQixVQUFJLE9BQU8sSUFBSSxRQUFRLElBQUksT0FBTyxHQUFHRCxZQUFXLEdBQUcsR0FBR0MsTUFBSyxHQUFHO0FBRTlELFVBQUlBLFFBQU8sV0FBVztBQUNwQixlQUFPLEtBQUssUUFBUSxrQ0FBa0MsdUJBQXVCO0FBQUEsTUFDL0U7QUFFQSxhQUFPO0FBQUEsUUFDTDtBQUFBLFFBQ0EsS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QURmQSxRQUFRLElBQUksaUJBQWlCLFFBQVEsSUFBSSxTQUFTLFFBQVEsSUFBSSxRQUFRO0FBQ3RFLElBQU0sV0FBVyxRQUFRLElBQUksWUFBWSxTQUFZLE9BQU8sUUFBUSxJQUFJLFlBQVk7QUFDcEYsSUFBTSxPQUFPLFdBQVcsWUFBWTtBQUNwQyxJQUFNLEtBQUssV0FBVyxXQUFXO0FBR2pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxHQUFHLGtCQUFrQixFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQUEsTUFDakMsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiZnJvbSIsICJ0byJdCn0K
