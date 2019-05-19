module.exports = {
  "root": true,
  "extends": "eslint:recommended",
  "rules": {
    "no-console": ["error", {
      "allow": ["warn", "error", "info", "log"]
    }]
  },
  "parser": 'babel-eslint',
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "globals": {
    // "window": true
  },
  "env": {
    // "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  }
}