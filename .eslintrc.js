module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'intno-underscore-dangle': 'off',
        'no-underscore-dangle': 'off',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-unused-vars': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'linebreak-style': ['error', 'windows'],
    },
    globals: {
        __IS_DEV__: true,
    },
};
