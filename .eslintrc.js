module.exports = {
   env: {
      browser: true,
      node: true,
   },
   extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:nuxt/recommended',
      'plugin:vue/vue3-recommended',
      'plugin:prettier/recommended',
   ],
   overrides: [
      {
         files: ['layouts/*.vue', 'pages/**', 'error.vue'],
         rules: { 'vue/multi-word-component-names': 'off' },
      },
   ],
   parserOptions: {
      ecmaVersion: 2020,
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
   },
   plugins: ['@typescript-eslint'],
   root: true,
   rules: {
      'sort-keys': ['warn', 'asc'],
      'vue/prop-name-casing': ['error', 'snake_case'],
   },
}
