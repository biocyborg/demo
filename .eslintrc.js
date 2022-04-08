module.exports = {
  extends: ['react-app', 'eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
