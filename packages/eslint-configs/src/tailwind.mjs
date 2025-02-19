// @ts-check

import tseslint from "typescript-eslint";
import tailwindcss from "eslint-plugin-tailwindcss";

// tailwindcss v4 미지원
export const tailwindConfig = tseslint.config({
  files: ["**/*.{ts,tsx,js,jsx}"],
  plugins: {
    tailwindcss,
  },
  extends: [...tailwindcss.configs["flat/recommended"]],
});
