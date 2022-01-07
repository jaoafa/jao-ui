module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'selector-class-pattern': '^[a-z][a-z0-9-_]+[a-z0-9]$',
    'color-function-notation': 'legacy',
  },
}
