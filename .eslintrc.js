module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    camelcase: "off",
    'prettier/prettier': [
      "error",
      { endOfLine: "auto" }
    ],
  },
};
