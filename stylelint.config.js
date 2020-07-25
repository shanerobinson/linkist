module.exports = {
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
// Used so built-in VSCode CSS linter doesn't report errors on Tailwind configs and styles.
// Install: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
// Disable: CSS Validate in Settings
// via https://www.meidev.co/blog/visual-studio-code-css-linting-with-tailwind/
