module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': [1, { anonymous: 'always', named: 'never' }],
    semi: 0
  },
  globals: {},
  parserOptions: {
    parser: 'babel-eslint'
  }
};
