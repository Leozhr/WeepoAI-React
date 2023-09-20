module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: "@rocketseat/eslint-config/react",
    ignorePatterns: ['.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
}