module.exports = {
    'extends': ['airbnb','eslint-config-prettier'],
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
    },
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      'prettier/prettier': ['error', { singleQuote: true }]
    },
    'globals': {
      "fetch": false
    },
      plugins: ['eslint-plugin-prettier']
  }
