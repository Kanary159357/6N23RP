import {
  defineConfig,
  e,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
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
    "table-cell": "text-left align-middle p-10px h-50px",
    "table-row": "border-t-1",
    table: "shadow border-none border-collapse w-full table-fixed rounded-sm",
  },
  rules: [
    [
      /^scrollbar-hide$/,
      (_, { rawSelector }) => {
        const selector = e(rawSelector);
        return `
            ${selector}{
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            ${selector}::-webkit-scrollbar{
              color: blue;
            }
          `;
      },
    ],
    [
      /^details-popup$/,
      (_, { rawSelector }) => {
        const selector = e(rawSelector);
        return `

            ${selector}[open]>summary::before{
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 80;
              display: block;
              cursor: default;
              content: " ";
              background: transparent;
            }
            ${selector} > summary {
              list-style: none;
            }
            ${selector}> summary::marker, ${selector}> summary::-webkit-details-marker {
              display: none;
            }
            ${selector}>div{
              z-index:90;
              position: relative
            }
          `;
      },
    ],
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
});
