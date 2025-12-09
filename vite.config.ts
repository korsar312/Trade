import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import vitePluginSvgr from "vite-plugin-svgr";
import { Consts } from "./src/Logic/Config/Consts";

// https://vite.dev/config/
export default defineConfig({
	base: Consts.basePath,
	plugins: [
		react({
			jsxImportSource: "@emotion/react",
			plugins: [],
		}),
		checker({
			overlay: { initialIsOpen: true },
			typescript: { buildMode: true },
		}),

		vitePluginSvgr(),
	],
});
