const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// 只处理一次，所以不会无限循环
myEmitter.once('newListener', (event, listener) => {
	console.log('listener', listener);
	if (event === 'event') {
	    // 在开头插入一个新的监听器
	    myEmitter.on('event', () => {
	    	console.log('B');
	    });
	}
});

myEmitter.on('event', () => {
  console.log('A');
});

myEmitter.emit('event');

// 回调函数中添加监听的名字和已有监听器的名字重复，会被放到同步监听器的最前面
// B
// A