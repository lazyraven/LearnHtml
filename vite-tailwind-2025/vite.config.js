import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// This plugin handles scanning your files and injecting Tailwind.
export default defineConfig({
  plugins: [
    tailwindcss(),
    // other plugins…
  ],
});
