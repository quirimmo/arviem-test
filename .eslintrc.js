module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  plugins: ['html', 'eslint-plugin-html', '@typescript-eslint', 'import', 'angular', 'eslint-plugin-angular'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    jasmine: true,
    es6: true,
    browser: true,
    node: true
  },
  globals: {
    angular: true
  },
  rules: {
    'no-use-before-define': 0,
    'arrow-parens': ['error', 'as-needed'],
    semi: ['error', 'always'],
    'max-len': ['error', { code: 140 }],
    'no-param-reassign': 0,
    'spaced-comment': 0,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'object-curly-newline': ['error', { multiline: true, minProperties: 4, consistent: false }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never'
      }
    ],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    'import/prefer-default-export': 0
  },
  overrides: [
    {
      files: ['*.spec.*'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/explicit-function-return-type': 0
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/']
      },
      typescript: {}
    },
    'html/html-extensions': ['.html'],
    angular: 2
  }
};
