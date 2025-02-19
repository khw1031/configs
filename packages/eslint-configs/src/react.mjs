import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export const reactConfig = tseslint.config({
  files: ["**/*.{ts,tsx,js,jsx}"],
  plugins: {
    react,
    "react-hooks": reactHooks,
  },
  extends: [...react.configs.recommended, ...reactHooks.configs.recommended],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
});
