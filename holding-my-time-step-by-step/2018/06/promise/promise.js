class Promise {
	// 构造器
	constructor(excutor) {
		// 初始化state为等待状态
		this.state = 'pending';
		// 成功的值
		this.value = undefined;
		// 失败的值
		this.reason = undefined;
		// 成功时存放的数组
		this.onResolvedCallbacks = [];
		// 失败时存放的数组
		this.onRejectedCallbacks = [];
		let resolve = (value) => {
			// state如果不是pengding状态，resolve就会调用失败
			if (this.state === 'pending') {
				this.state = 'fulfilled';
				this.value = value;
				// 一旦resolve执行，调用成功数组的函数
				this.onResolvedCallbacks.forEach(fn => fn());
			}
		};
		let reject = (reason) => {
			if (this.state === 'pending') {
				// reject调用后，state转化为失败态
		        this.state = 'rejected';
		        // 储存失败的原因
		        this.reason = reason;
		        // 一旦reject执行，调用失败数组的函数
        		this.onRejectedCallbacks.forEach(fn => fn());
			}
		};
		try {
			excutor(resolve, reject);
		} catch (err) {
			reject(err);
		}
	}

	then(onFulfilled, onRejected) {
		// onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
    	onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    	// onRejected如果不是函数，就忽略onRejected，直接扔出错误
    	onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
		let promise2 = new Promise((resolve, reject) => {
			if (this.state === 'fulfilled') {
				setTimeout(() => {
					try {
						let x = onFulfilled(this.value);
						console.log('promise2', promise2)
						// resolvePromise函数，处理自己return的promise和默认的promise2的关系
		        		resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				}, 0);
			}
			if (this.state === 'rejected') {
				setTimeout(() => {
					try {
						let x = onRejected(this.reason);
       					resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				}, 0);
			}
			if (this.state === 'pending') {
				console.log('pending')
				// onFulfilled传入到成功数组
				this.onResolvedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onFulfilled(this.value);
							// resolvePromise函数，处理自己return的promise和默认的promise2的关系
			        		resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					}, 0);
				});
				// onRejected传入到失败数组
				this.onRejectedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onRejected(this.reason);
							console.log('x', x)
	       					resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					}, 0);
				})
			}
		});
		return promise2;
	}
	catch(fn) {
	    return this.then(null, fn);
	}
}

function resolvePromise(promise2, x, resolve, reject) {
	if (promise2 === x) {
		// reject报错
    	return reject(new TypeError('Chaining cycle detected for promise'));
	}

	let called;
	if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
		try {
			// A+的规定
			let then = x.then;
			// 如果then是函数，就默认是promise了
			if (typeof then === 'function') {
				then.call(x, y => {
					if (called) return;
					called = true;
					// resolve的结果依旧是promise 那就继续解析
					console.log('y', y);
					resolvePromise(promise2, y, resolve, reject);
				}, err => {
					console.log('y', err);
					// 成功和失败只能调用一个
          			if (called) return;
          			called = true;
          			reject(err); // 失败了就失败了
				})
			} else {
				resolve(x);
			}
		} catch (e) {
			// 也属于失败
	      	if (called) return;
	      	called = true;
	      	// 取then出错了那就不要在继续执行了
	      	reject(e); 
		}
	} else {
    	resolve(x);
  	}
}

// 测试 1
// new Promise((resolve, reject) => {
// 	resolve(1)
// 	console.log(2)
// }).then(() => {
// 	console.log(1)
// })
// 2 1

// 测试 2
new Promise((resolve, reject) => {
	// setTimeout(() => {
		resolve(1);
	// }, 1000);
	console.log(2)
}).then((v) => {
	console.log(v)
	return new Promise((resolve, reject) => {
		resolve(3);
	});
}).then((v) => {
	console.log(v);
}, (e) => {
	console.log('e', e);
})

