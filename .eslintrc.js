module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'arrow-body-style': 'off',
    'array-bracket-spacing': 'off',
    'array-callback-return': 'off',
    'arrow-parens': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'dot-notation': 'off',
    'func-call-spacing': 'off',
    'func-names': 'off',
    'guard-for-in': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/no-duplicates': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    indent: 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-case-declarations': 'off',
    'no-cond-assign': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'no-lonely-if': 'off',
    'no-mixed-operators': 'off',
    'no-multi-spaces': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-return-await': 'off',
    'no-shadow': 'off',
    'no-spaced-func': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-useless-escape': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'quote-props': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'spaced-comment': 'off',
    'semi': ['error', 'always'],
    'template-curly-spacing': 'off', // Causes "Cannot read property 'range' of null" error
    // Four attributes per line per element
    'vue/max-attributes-per-line': ['warn', {
      singleline: 4,
      multiline: { max: 4, allowFirstLine: true }
    }]
  }
};
