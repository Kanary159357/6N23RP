import { defineConfig } from "astro/config";
import Unocss from "unocss/astro";
import vercel from "@astrojs/vercel/serverless";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import presetIcons from "@unocss/preset-icons";
import { presetUno, toEscapedSelector as e } from "unocss";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
        }),
      ],
      shortcuts: {
        "table-cell": "text-left align-middle p-10px",
        "table-row": "border-t-1",
        "table": "shadow border-none border-collapse w-full table-fixed rounded-sm"
      },
      rules: [
        [/^scrollbar-hide$/, (_, { rawSelector }) => {
          const selector = e(rawSelector)
          return `
            ${selector}{
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            ${selector}::-webkit-scrollbar{
              color: blue;
            }
          `
        }],
      ],
      theme: {
        breakpoints: {
          mobile: "720px",
          tablet: "768px",
          desktop: "1440px",
        },
        colors: {
          black_1: "#212529",
          black_2: "#333333",
          white_1: "#ffffff",
          white_2: "#efefef",
          border_1: "#d1d1d1",
          red_1: "#ff937d",
          red_2: "#b35440",
          red_3: "#b33a20",
          green_1: "#b1e36f",
          green_2: "#93ad74",
          gray_1: "#c9c9c9",
          gray_2: "#8a8a8a",
          gray_3: "#525251",
          overlay: "rgba(0, 0, 0, 0.6)",
        },
      },
      transformers: [transformerVariantGroup()],
    }),
    react(),
  ],
});
