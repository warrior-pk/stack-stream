import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import daisyThemes from "daisyui/src/theming/themes";
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "repeat(auto-fill, minmax(20rem, 1fr))",
      },
    },
  },

  plugins: [daisyui, typography],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyThemes["emerald"],
        },
      },
      {
        dark: {
          ...daisyThemes["dark"],
          primary: "#50a172", // Darker shade of emerald green
          "primary-content": "#d1e7dd", // Lightened version for contrast
          secondary: "#2c63c7", // Darkened blue for better night visibility
          "secondary-content": "#d1daff", // Soft light blue for contrast
          accent: "#cc5b48", // Darkened warm accent color
          "accent-content": "#ffe5de", // Lightened for readability
          neutral: "#2a323c", // Consistent dark neutral
          "neutral-content": "#A6ADBB", // Light gray text for readability
          "base-100": "#1d232a", // Dark background
          "base-content": "#D7DDE4", // Light text for readability
          "--animation-btn": "0",
          "--animation-input": "0",
          "--btn-focus-scale": "1",
        },
      },
      "dim",
      "cupcake",
      "bumblebee",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "forest",
      "black",
      "dracula",
      "cmyk",
      "night",
      "winter",
      "nord",
      "sunset",
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
} satisfies Config;
