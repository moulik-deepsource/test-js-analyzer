module.exports = {
      parser: "@typescript-eslint/parser",
      rules: {
         "indent": ["error", 2, { "SwitchCase": 1 }],
         "yoda"  : ["error", "always"]
   }
}
