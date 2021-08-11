// https://saul-mirone.github.io/a-complete-guide-to-typescript-decorator/
type Validator = (x: any) => boolean;

// save the marks
const validateMap: Record<string, Validator[]> = {};

function typedDecoratorFactory(validator: Validator): ParameterDecorator {
  return (_, key: string, index: number) => {
    console.log('key', _, key, index)
    const target = validateMap[key] ?? [];
    target[index] = validator;
    validateMap[key] = target;
  }
}

const isString = typedDecoratorFactory((x: any) => typeof x === 'string');

const isInt = typedDecoratorFactory((x: any) => typeof x === 'number');

function validate(_: any, key: string, descriptor: PropertyDescriptor) {
  const originalFn = descriptor.value;

  descriptor.value = function(...args: any[]) {
    const validatorList = validateMap[key];

    args.forEach((arg, index) => {
      const validator = validatorList[index];

      if (!validator) return;

      console.log('validator', validator.toString(), arg)
      const result = validator(arg);

      if (!result) {
        throw new Error(
          `Failed for parameter: ${arg} of the index: ${index}`
        );
      }
    });

    return originalFn.call(this, ...args);
  }
}

class MultipleDecorator {
  @validate
  sayRepeat(@isString@isInt word: string, @isInt x: number) {
    return Array(x).fill(word).join('');
  }
}

const multipleDecorator = new MultipleDecorator();
multipleDecorator.sayRepeat('hello', 2); // pass
multipleDecorator.sayRepeat('', 'lol' as any); // throw an error