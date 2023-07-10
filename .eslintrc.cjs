module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: [
        'pug',
    ],
    extends: 'airbnb-base',
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@babel/eslint-parser',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': [
            'error',
            process.platform === 'win32' ? 'windows' : 'unix',
        ],
    },
};