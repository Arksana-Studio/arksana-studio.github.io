import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";
import prettier from "eslint-config-prettier";
import eslint from "@eslint/js";
import parser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  eslint.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  prettier,
  {
    languageOptions: {
      parser
    }
  }
];

export default eslintConfig;
