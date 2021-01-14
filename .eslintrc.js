module.exports = {
  root: true,
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'global-require': 'warn',
    'no-prototype-builtins': 'warn',
    'no-cond-assign': ['warn', 'always'],
    'no-undef': ['error', { typeof: true }],
  }
};
