module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: './tsconfig.json',
  },
  plugins: [
    "react",
    '@typescript-eslint',
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
