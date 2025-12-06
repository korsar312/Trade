import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import vitePluginSvgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: "@emotion/react",
			plugins: [["@swc/plugin-emotion", { sourceMap: true, autoLabel: "dev-only", labelFormat: "[local]" }]],
		}),
		checker({
			overlay: { initialIsOpen: true },
			typescript: { buildMode: true },
		}),

		vitePluginSvgr(),
	],
});
