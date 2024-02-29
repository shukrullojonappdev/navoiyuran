/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        contrast: {
          primary: "#fff",
          secondary: "#fff",
          accent: "#fff",
          neutral: "#fff",
          "base-100": "#000",
          info: "#fff",
          success: "#fff",
          warning: "#fff",
          error: "#fff",
        },
      },
      "dark",
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
