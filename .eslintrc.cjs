export default {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    // Best practices for React
    'react/jsx-uses-react': 'off', // React 17+ JSX transform
    'react/react-in-jsx-scope': 'off', // React 17+ JSX transform
    'react/jsx-props-no-spreading': 'warn', // Discourage prop spreading
    'react/jsx-sort-props': [
      'warn',
      {
        // Sort props for readability
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'react/prop-types': 'off', // Using TypeScript for type checking
    'react/display-name': 'off', // Disable display name requirement
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }], // Ensure proper file extensions for JSX
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    // Accessibility
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn', // Require alt text for images
    'jsx-a11y/anchor-has-content': 'warn', // Ensure anchors have content
    'jsx-a11y/anchor-is-valid': 'warn', // Ensure anchors are valid

    // Prettier
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],

    // Naming conventions
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],

    // General best practices
    'prefer-const': 'error', // Prefer const over let
    'no-var': 'error', // Disallow var, use let or const instead
    'arrow-body-style': ['error', 'as-needed'], // Require braces in arrow function body only when needed
    'prefer-arrow-callback': 'error', // Prefer arrow functions as callbacks
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
};
