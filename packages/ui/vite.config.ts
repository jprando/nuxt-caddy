import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// import Components from "unplugin-vue-components/vite";
// import { PrimeVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue(), dts({ copyDtsFiles: true })],
  plugins: [
    vue(),
    // Components({
    //   resolvers: [PrimeVueResolver()],
    // }),
    dts(),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "lib/index.ts"),
      name: "@garage/ui",
      // formats: ["es"],
      // the proper extensions will be added
      // fileName: "garage-ui",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue", "primevue"],
      // external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    fs: {
      allow: ["../.."],
    },
  },
});
