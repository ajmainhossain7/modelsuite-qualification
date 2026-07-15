module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react-hooks', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
};
