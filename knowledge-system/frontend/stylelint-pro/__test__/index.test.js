const rule = require("..");
const { ruleName, messages } = rule;

testRule(rule, {
  ruleName,
  config: {
    ignoreFiles: ['less']
  },

  accept: [
    {
      code: "a { z-index:10; color: red; }",
      description: "the style is ok"
    },
  ],
  reject: [
    {
      code: "@light: rgb(0, 0, 0); @color1: @light; a { z-index:10; color: @color1; }",
      description: "variable rgb(0, 0, 0) can not be color literal",
      message: messages.rejected('rgb(0, 0, 0)')
    },
  ]
});