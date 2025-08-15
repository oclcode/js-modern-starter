import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import jestPlugin from "eslint-plugin-jest";
import importPlugin from "eslint-plugin-import";

export default [
  eslint.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      jest: jestPlugin,
      import: importPlugin,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "import/extensions": ["error", "ignorePackages", { js: "always" }],
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForOfStatement",
          message:
            "Use Array.prototype.forEach or Array.prototype.every instead of for...of",
        },
      ],
    },
  },
  prettierConfig,
];
