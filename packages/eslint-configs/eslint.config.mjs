// @ts-check

import { eslintConfig } from "./src/eslint.mjs";
import tseslint from "typescript-eslint";

export default tseslint.config(eslintConfig, {
  files: ["src/**/*.mjs"],
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
