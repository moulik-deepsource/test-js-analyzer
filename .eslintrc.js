module.exports = {
  root: true,
  extends: ["semistandard"],
  env: { node: true, browser: true, es6: true },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: { jsx: false },
    sourceType: "script",
  },
  rules: { strict: ["error", "safe"] },
};
