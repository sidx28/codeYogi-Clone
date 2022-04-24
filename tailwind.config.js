module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        bullets: {
          css: { '--tw-prose-bullets': theme('colors.black') },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
