import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn', // Nada de 'off'. El console.log en producción es pérdida de rendimiento.
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error', // Fallo directo. Variable que no genera tracción, se elimina.
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        }
      ],
      '@typescript-eslint/no-empty-object-type': 'warn'
    }
  }
);