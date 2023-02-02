import { defineConfig } from "vite";
import { plugin } from "vite-plugin-elm";

export default defineConfig({
  plugins: [plugin()],
  base: "https://kentookura.github.io/elm-prosemirror-math",
});
