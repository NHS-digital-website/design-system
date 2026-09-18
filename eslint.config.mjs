import js from '@eslint/js';
import { importX } from 'eslint-plugin-import-x';
import globals from 'globals';

export default [
  {
    ignores: [
      'dist/**',
      'homepage/**',
      'src/nhsd/**/*.stories.js',
      'storybook-static/**',
    ],
  },
  js.configs.recommended,
  importX.flatConfigs.recommended,
  {
    files: ['src/**/*.js', 'gulpfile.js/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        SVG_ICONS: 'readonly',
      },
    },
    rules: {
      'eol-last': [2, 'always'],
      'import-x/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import-x/no-unresolved': ['error', { ignore: ['^@/'] }],
      indent: 0,
      'linebreak-style': 0,
      'max-len': 0,
      'no-constructor-return': 0,
      'no-dupe-class-members': 0,
      'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0 }],
      'no-redeclare': 0,
      'no-param-reassign': ['error', { props: false }],
      'no-plusplus': 0,
      'no-tabs': 0,
      'function-paren-newline': 0,
      'func-names': 0,
      'no-unused-vars': ['error', { caughtErrors: 'none' }],
    },
  },
];
