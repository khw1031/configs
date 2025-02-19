// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export const eslintConfig = tseslint.config(eslint.configs.recommended, {
  languageOptions: {
    ecmaVersion: "latest",
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2025,
    },
  },
});
