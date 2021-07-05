module.exports = { 
    env:{
        es2021: true,
        browser: true,
        node: true,
    }, 
    extends: ['airbnb-base'], 
    plugin: [
        'import',
        'react',
    ], 
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    }, 
    rules: {
        'linebreak-style': 'off', // Неправильно работает в Windows.
        'no-use-before-define': 'off',
        'arrow-parens': 'off', // Несовместимо с prettier
        'object-curly-newline': 'off', // Несовместимо с prettier
        'no-mixed-operators': 'off', // Несовместимо с prettier
        'arrow-body-style': 'off', // Это - не наш стиль?
        'function-paren-newline': 'off', // Несовместимо с prettier
        'no-plusplus': 'off',
        'space-before-function-paren': 0, // Несовместимо с prettier
        'max-len': ['error', 100, 2, { ignoreUrls: true, }], // airbnb позволяет некоторые пограничные случаи
        'no-console': 'error', // airbnb использует предупреждение
        'no-alert': 'error', // airbnb использует предупреждение
        'react/require-default-props': 'off', // airbnb использует уведомление об ошибке
        'react/forbid-prop-types': 'off', // airbnb использует уведомление об ошибке
        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb использует .jsx
        'prefer-destructuring': 'off',
        'react/no-find-dom-node': 'off', // Я этого не знаю
        'react/no-did-mount-set-state': 'off',
        'react/no-unused-prop-types': 'off', // Это всё ещё работает нестабильно
        'react/jsx-one-expression-per-line': 'off',
    },
 };