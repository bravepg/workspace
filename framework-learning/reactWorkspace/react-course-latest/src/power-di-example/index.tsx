import React from 'react';
import { classInfo, imports, injectable, IocContext } from 'power-di';

const context = new IocContext();

/** 贡献实现标记 */
export function contribution(opt?: any) {
  // 贡献实现类信息注册
  return classInfo({
    ...opt,
  });
}

/** 注入贡献实现标记 */
export function getContributions({
  type,
}: {
  /** 贡献实现定义类型 */
  type?: KeyType;
} = {}) {
  console.log('getContributions type', type)
  if (!type) {
    throw new Error('getContributions 类型未定义');
  }
  // 每次访问都重新计算贡献实现列表
  return imports({ type, always: true });
}

class A { }

@contribution()
class B extends A { }

@contribution()
class C extends A { }

@injectable()
class LITestService {
  @getContributions()
  public testService: A[];
}

const test = context.get(LITestService); // test.testService as A[];

console.log('test', B, C, test);

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        Demo
      </div>
    )
  }
}