module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["jest"],
  root: true,
};
