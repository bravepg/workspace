import { Injectable, classFactory } from './myIoc';

@Injectable()
class C {
  constructor() {}
  sayHello() {
    console.log("hello")
	}
}

@Injectable()
class B {
  constructor(private c: C) {
		this.c = c;
	}
	sayHello() {
		this.c.sayHello();
	}
}

@Injectable()
class A {
	constructor(private b: B) {
    b.sayHello();
	}    
}

// 产生实例
let a: A = classFactory(A);