import React, { useState, useMemo } from 'react';

const useMethods = (initValue, methods) => {
  const [value, setValue] = useState(initValue);
  const boundMethods = useMemo(() => {
    return Object.entries(methods).reduce((obj, [name, fn]) => {
      const method = (...args) => {
        console.log(...args, '内层执行啦');
        setValue(value => fn(value, ...args));
      };
      console.log('外层执行啦');
      obj[name] = method;
      return obj;
    }, {});
  }, [methods]);
  return [value, boundMethods];
};

const arrayMethods = {
  push(state, item) {
    return state.concat(item);
  },
  pop(state) {
    return state.slice(0, -1);
  },
  slice(state, start, end) {
    return state.slice(start, end);
  },
  empty() {
    return [];
  },
  set(state, newValue) {
    return newValue;
  },
  remove(state, item) {
    const index = state.indexOf(item);
    if (index < 0) {
      return state;
    }
    return [...state.slice(0, index), ...state.slice(index + 1)];
  }
};

const useArray = (initialValue = []) => {
  return useMethods(initialValue, arrayMethods);
};

export default function MyApp() {
  const [value, { push }] = useArray();
  console.log('value', value);
  return (
    <button onClick={() => push('测试')}>点击测试</button>
  )
}