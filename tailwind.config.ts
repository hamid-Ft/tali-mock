import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)"],
      noto: ["var(--font-noto-serif)"],
    },
    extend: {
      backgroundImage: {
        "back-ground": "url('https://tali.ai/profile/bg_glow_static.svg')",
        "grad-yellow":
          "linear-gradient(279.45deg,#ffd317 7.13%,#ffb40d 92.87%);",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dark-purple-btn":
          "background-image: linear-gradient(90deg,#261935,#261935),linear-gradient(275.77deg,#ffb40d 4.98%,#a25ecb 26.4%);color: #fff;",
      },
    },
  },
  plugins: [],
};
export default config;
