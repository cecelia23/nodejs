module.exports = {
    "root": true,
    "extends": "eslint:recommended",
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script"
    },
    "rules": {
      "no-console": ["error", {
        "allow": ["warn", "error", "info"]
      }]
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "env": {
      // "browser": true,
      "node": true,
      // "mocha": true
    }
};