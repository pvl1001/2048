module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "no-debugger": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "react/display-name": "off",
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-empty-pattern": "off",
        "@typescript-eslint/no-empty-object-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-require-imports": "off",
        "prefer-const": "off",
    }
}
