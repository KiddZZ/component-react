module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react","prettier"
    ],
    "extends": "prettier",
    "rules": {
        "prefer-template": 2,
        "new-cap": 2,
        "no-restricted-syntax": 2,
        "guard-for-in": 2,
        "prefer-arrow-callback": 2,
        "func-names": 2,
        "react/jsx-no-bind": 2,
        "no-confusing-arrow": 2,
        "jsx-a11y/no-static-element-interactions": 2,
        "jsx-a11y/anchor-has-content": 2,
        "react/require-default-props": 2,
        "no-plusplus": 2,
        "no-mixed-operators": 0,
        "no-continue": 2,
        "no-bitwise": 2,
        "no-multi-assign": 2,
        "no-restricted-properties": 2,
        "no-prototype-builtins": 2,
        "jsx-a11y/href-no-hash": 2,
        "class-methods-use-this": 2,
        "import/no-named-as-default": 2,
        "import/prefer-default-export": 2,
        "react/no-unescaped-entities": 2,
        "react/no-string-refs": 2,
        "react/jsx-indent": 0,
        "prettier/prettier": "error"
    },
    "parserOptions": {
        "ecmaFeatures": {
          "legacyDecorators": true
        }
    }
};