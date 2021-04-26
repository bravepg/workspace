const stylelint = require("stylelint");

const ruleName = "plugin/stylelint-variable-no-color-literal";

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: expected =>
    `variable ${expected} can not be color literal`,
});

function isString(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "String";
}

module.exports = stylelint.createPlugin(ruleName, function(options) {
  return function(cssRoot, result) {
    const validOptions = stylelint.utils.validateOptions(
      result,
      ruleName,
      {
        actual: options,
        possible: {
          ignoreFiles: [isString],
        },
        optional: true
      }
    );

    if (!validOptions) {
      return;
    }

    const regexp = /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^\)]*\)|\b(black|silver|gray|whitesmoke|maroon|red|purple|fuchsia|green|lime|olivedrab|yellow|navy|blue|teal|aquamarine|orange|aliceblue|antiquewhite|aqua|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|gold|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olive|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|white|yellowgreen|rebeccapurple)\b/i;
    cssRoot.walkAtRules(function(rule) {
      if (regexp.test(rule.params)) {
        stylelint.utils.report({
          ruleName,
          result,
          node: rule,
          message: messages.rejected(rule.params),
        });
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
