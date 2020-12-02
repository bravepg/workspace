// 全局变量，一般使用 const，而不是 let 或者 var
declare const jQuery: (selector: string) => any;

// 全局函数，支持重载
declare function jQuery1(selector: string): any;
declare function jQuery1(callback: () => {}): any;

// 全局类
declare class Animal {
  name: string;
  constructor(name: string);
  sayHi(): string;
}

// 定义枚举值
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

// 定义命名空间(声明合并，和上面定义的 jQuery1 函数)
declare namespace jQuery1 {
  // 命名空间内部可以直接使用 function ajax，而不是 declare function ajax
  function ajax(url: string, setting?: any): void
  const version: number;
  class Event {
    blur(eventType: EventType): void;
  }
  enum EventType {
    CostumClick,
  }
}

// 全局接口或者类型
interface AjaxSettings {
  method?: 'GET' | 'POST';
  data?: any;
}

// ===============================
// npm 包声明文件
// 只有 function、class、inteface 支持直接默认导出
