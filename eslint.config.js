import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    files: ["**/*.js", "**/*.mjs"],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    }
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-console": "off",
      "eqeqeq": "error",
      "no-implicit-coercion": "error",
      "prefer-const": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-prototype-builtins": 0,
      "no-template-curly-in-string": "off",
      "@stylistic/js/indent": [
        "error",
        2,
        { "SwitchCase": 1 }
      ],
      "space-in-parens": ["error", "never"]
    },
  },
  {
    files: ["**/*.mjs", "lesson_10/**"],
    rules: {
      "indent": "off",

    }
  },
  {
    ignores: ["lesson_10/**"]
  }
];