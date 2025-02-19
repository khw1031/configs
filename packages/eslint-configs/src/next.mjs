// @ts-check

import tseslint from "typescript-eslint";
import next from "eslint-config-next";

export const nextConfig = tseslint.config({
  files: ["**/*.{ts,tsx,js,jsx}"],
  extends: [...next.configs.recommended],
});
