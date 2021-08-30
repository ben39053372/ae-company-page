const DOMGlobals = ['window', 'document']
const NodeGlobals = ['module', 'require']

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  extends: [
    'plugin:vue/vue3-recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    // most of the codebase are expected to be env agnostic
    'no-restricted-globals': ['error', ...DOMGlobals, ...NodeGlobals],
    // since we target ES2015 for baseline support, we need to forbid object
    // rest spread usage (both assign and destructure)
    'no-restricted-syntax': [
      'error',
      'ObjectExpression > SpreadElement',
      'ObjectPattern > RestElement',
      'AwaitExpression'
    ],
    'vue/html-indent': [1, 2, { // Vue 中的 html 的撰寫規則，詳請請查閱官方文件
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    'vue/html-closing-bracket-newline': [2, { // Vue 中的 html 的撰寫規則，詳請請查閱官方文件
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/html-closing-bracket-spacing': [2, { // Vue 中的 html 的撰寫規則，詳請請查閱官方文件
      selfClosingTag: 'always'
    }]
  }
}