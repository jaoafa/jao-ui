module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  customSyntax: 'postcss-html',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['use', 'forward', 'mixin', 'include', 'for', 'each'],
      },
    ],
    'selector-class-pattern': '^[a-z][a-z0-9-_]+[a-z0-9]$',
    'color-function-notation': 'legacy',
  },
}
