module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    commonjs: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["unused-imports"],
  ignorePatterns: [
    "/node_modules",
    "/package-lock.json",
    "/yarn.lock",
    "/.gen",
    "/.expo",
    "/.idea",
    "/assets",
    "/build",
    "/coverage",
    "/dist",
  ],
  rules: {
    // use plugin `unused-imports` instead of `no-unused-vars` rule to auto fix unused imports
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
  },
};
