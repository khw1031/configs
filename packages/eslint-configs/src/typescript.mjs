// @ts-check

import tseslint from "typescript-eslint";
import { eslintConfig } from "./eslint.mjs";

export const typescriptConfig = tseslint.config(
  eslintConfig,
  tseslint.configs.recommended,
);
