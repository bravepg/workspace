/**
 * 实例操作符：挂载到 Observable 实例上
 *  Rx.Observable.prototype
 * 静态操作符：最常用的静态操作符是创建操作符
 */

const Rx = require('rxjs/Rx');

const observable1 = Rx.Observable.interval(1000);
const observable2 = Rx.Observable.interval(2000);

const merged = Rx.Observable.merge(observable1, observable2);

merged.subscribe(x => console.log('x', x));
