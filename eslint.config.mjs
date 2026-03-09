import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsoncPlugin from 'eslint-plugin-jsonc';
import * as mdx from 'eslint-plugin-mdx';
import react from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const jsRules = {
  'array-callback-return': ['error', { checkForEach: false }],
  'block-scoped-var': 'error',
  'consistent-return': 'error',
  'constructor-super': 'error',
  eqeqeq: 'error',
  'for-direction': 'error',
  'getter-return': 'error',
  'import/order': [
    'error',
    {
      alphabetize: { order: 'asc', caseInsensitive: false },
      groups: [
        ['builtin', 'external'],
        ['internal', 'unknown'],
        ['parent', 'sibling', 'index'],
      ],
      'newlines-between': 'never',
      warnOnUnassignedImports: false,
    },
  ],
  'no-alert': 'error',
  'no-async-promise-executor': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-const-assign': 'error',
  'no-constant-condition': 'error',
  'no-constructor-return': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-eval': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-semi': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-import-assign': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-invalid-this': 'error',
  'no-irregular-whitespace': 'error',
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-misleading-character-class': 'error',
  'no-multi-str': 'error',
  'no-new-func': 'error',
  'no-new-symbol': 'error',
  'no-new-wrappers': 'error',
  'no-obj-calls': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-return-assign': 'error',
  'no-return-await': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-setter-return': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-this-before-super': 'error',
  'no-throw-literal': 'error',
  'no-undef': 'error',
  'no-unexpected-multiline': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unused-expressions': 'error',
  'no-unused-labels': 'error',
  'no-unused-vars': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-useless-return': 'error',
  'no-void': 'error',
  'no-with': 'error',
  'prefer-regex-literals': 'error',
  radix: 'error',
  'require-yield': 'error',
  'sort-imports': [
    'error',
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      allowSeparatedGroups: false,
    },
  ],
  'use-isnan': 'error',
  'valid-typeof': 'error',
  'vars-on-top': 'off',
  yoda: 'error',
};

const reactRules = {
  'react/no-unknown-property': 'off',
  'react/prop-types': 'off',
  'react/jsx-key': 'off',
  'react/react-in-jsx-scope': 'off',
};

export default tseslint.config(
  // Global ignores (migrated from .eslintignore)
  {
    ignores: [
      '**/node_modules/',
      '**/vendor/',
      '**/build/',
      '**/coverage/',
      '**/dist/',
      '**/tmp/',
      'components/components.d.ts',
      'packages/web-components-angular/src/directives/angular-component-lib/utils.ts',
      'packages/web-components-angular/src/directives/proxies.ts',
      'packages/web-components-stencil/loader/',
      'packages/web-components-react/src/react-component-lib/',
      'packages/web-components-react/src/components.ts',
    ],
  },

  // JSON files
  ...jsoncPlugin.configs['flat/recommended-with-json'],

  // MDX files
  {
    ...mdx.flat,
    files: ['**/*.mdx'],
    languageOptions: {
      ...mdx.flat.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.es2018,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      ...mdx.flat.plugins,
      react,
      import: importPlugin,
    },
    rules: {
      ...mdx.flat.rules,
      ...react.configs.flat.recommended.rules,
      ...prettierConfig.rules,
      ...jsRules,
      ...reactRules,
    },
  },

  // JS/JSX/TS/TSX source files
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2018,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react,
      import: importPlugin,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...prettierConfig.rules,
      ...jsRules,
      ...reactRules,
    },
  },

  // CJS/MJS files (utils)
  {
    files: ['**/*.cjs', '**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.es2018,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react,
      import: importPlugin,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...prettierConfig.rules,
      ...jsRules,
      ...reactRules,
    },
  },

  // TS/TSX files — Stencil components (type-checked with stencil tsconfig)
  {
    files: ['**/stencil.tsx', '**/*.stencil.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2018,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: ['packages/web-components-stencil/tsconfig.json'],
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react,
      import: importPlugin,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...prettierConfig.rules,
      ...jsRules,
      ...reactRules,
      'no-undef': 'off',
    },
  },

  // TS/TSX files — all other (type-checked with multiple tsconfigs)
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/stencil.tsx', '**/*.stencil.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2018,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: [
          'packages/storybook/tsconfig.json',
          'packages/web-components-react/tsconfig.json',
          'packages/components-react/tsconfig.json',
          'packages/components-react/tsconfig.test.json',
          'packages/lux-community-components-react/tsconfig.json',
          'packages/lux-community-components-react/tsconfig.test.json',
          'packages/web-components-stencil/tsconfig.json',
          'packages/web-components-stencil/tsconfig.jest.json',
          'proprietary/icons/tsconfig.json',
        ],
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react,
      import: importPlugin,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...prettierConfig.rules,
      ...jsRules,
      ...reactRules,
      'no-undef': 'off',
    },
  },

  // Test files in components-react — add jest globals
  {
    files: ['packages/components-react/**/*.{js,ts,tsx,jsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },

  // Test files in lux-community-components-react — add jest globals
  {
    files: ['packages/lux-community-components-react/**/*.{js,ts,tsx,jsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
);
