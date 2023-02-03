/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/dist/plugin")
  ],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "mytheme",
    themes: [
      {
        mytheme: {
          "primary": "#1E3A8A",
          "secondary": "#CA8A04",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
}
