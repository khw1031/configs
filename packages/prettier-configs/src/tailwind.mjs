import baseConfig from "./index.mjs";

export default {
  ...baseConfig,
  tailwindFunctions: ["cn", "clsx", "cva"],
  plugins: ["prettier-plugin-tailwindcss"],
};
