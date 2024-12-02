import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#0A0A0A',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(90deg, rgba(241,245,249,1) 0%, rgba(191,161,247,1) 35%, rgba(116,67,208,1) 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
