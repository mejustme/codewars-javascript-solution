module.exports = {
  "root": true,
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2,
      {
        "VariableDeclarator": {
          "var": 2,
          "let": 2,
          "const": 3
        }
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-unused-vars": [
      "off"
    ],
    "space-before-blocks": [  // 代码块前空格
      "error"
    ],
    "space-infix-ops": [ // 操作符有空格
      "error"
    ],
    "keyword-spacing": [   // for等后空格
      "error"
    ],
    "no-console": [
      "off"   // 0,1,2 off/warn/error
    ],
    "lines-around-comment": [  // 块级注释前空行
      "error"
    ],
    "spaced-comment": [  // 注释前面默认要空格
      "error"
    ],
    "comma-spacing": [ // 逗号，默认前无空格，后有空格
      'error'
    ]
  }
};
