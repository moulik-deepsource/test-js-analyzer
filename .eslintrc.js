module.exports = {
      parser: "@typescript-eslint/parser",
      plugins: ['react'],
      rules: {
         "indent": ["error", 2, { "SwitchCase": 1 }],
         "react/jsx-sort-props"  : "error"
   }
}
