import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import cypress from 'eslint-plugin-cypress'

export default tseslint.config([
  // ✅ Ignore dist + coverage
  globalIgnores(['dist', 'coverage']),

  // ✅ Base config for app code
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      cypress,
    },
  },

  // ✅ Cypress-specific rules (E2E + colocated tests + support)
  {
    files: [
      'cypress/e2e/**/*.{js,ts,jsx,tsx}',
      'src/**/*.cy.{js,ts,jsx,tsx}',
      'cypress/support/**/*.{js,ts,jsx,tsx}',
    ],
    ...cypress.configs.recommended,
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.mocha, // Cypress uses Mocha
      },
    },
    rules: {
      '@typescript-eslint/no-namespace': 'off', // ✅ allow Cypress namespace
    },
  },

  // ✅ Context files (disable react-refresh strictness here)
  {
    files: ['src/contexts/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
])
