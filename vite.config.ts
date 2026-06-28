import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [
		devtools(),
		tailwindcss(),
		Unfonts({
			custom: {
				families: [
					{
						name: "tusker-grotesk",
						local: "tusker-grotesk",
						src: "./src/assets/fonts/tusker-grotesk-2800-super.ttf",
						fallback: {
							category: "sans-serif",
						},
					},
				],
			},
		}),
		tanstackStart(),
		viteReact(),
		babel({ presets: [reactCompilerPreset()] }),
	],
});

export default config;
