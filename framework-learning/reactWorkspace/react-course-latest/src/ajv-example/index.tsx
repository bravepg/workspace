import React from 'react';
import Ajv from 'ajv';
const ajv = new Ajv({
  errorDataPath: 'property',
  allErrors: true,
  multipleOfPrecision: 8,
  // nullable: true,
  schemaId: 'auto',
  unknownFormats: 'ignore',
});

const schema = {
  anyOf: [
    {
      "type": "object",
      "properties": {
        "$$__type": {
          "const": "subscription"
        },
        "$$__body": {
          "type": "object"
        }
      },
      "required": [
        "$$__type",
        "$$__body"
      ]
    },
    {
      "type": "number",
      "title": "计数",
      "tags": {
        "title": "计数",
        "propsBind": "\"@alipay/test-logic-component.count\""
      }
    }
  ]
};

const result = ajv.validate(schema, {
  "$$__type": "subscription",
  "$$__body": {
    "mode": "expression",
    "selector": "@alipay/test-logic-component.count",
    "bindingType": "oneWay",
    "bindingTarget": "name"
  }
});

console.log(result);

if (!result) {
  console.log(ajv.errors);
}

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        Demo
      </div>
    )
  }
}
