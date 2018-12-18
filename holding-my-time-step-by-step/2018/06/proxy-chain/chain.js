// 无报错链式调用https://zhuanlan.zhihu.com/p/29296692

const dummy = () => {}

let G

(function () {
  	G = this
})()  // 取得global或window，兼容Node与浏览器环境

function softBind (func, context) {
  return function (...args) {
    if (this === G) {
      	func.call(context, ...args)
    } else {
      	console.log('context', context);
      	func.call(this, ...args)
    }
  }
}

function pointer(root, path=[]) {
	return new Proxy(dummy, {
		get(target, property) {
			return pointer(root, path.concat(property));
		},
		apply(target, context , args) {
			let val = root;
			let parent;
			for (let i = 0; i < path.length; i++) {
				console.log(i, path[i]);
				if (val === null || val === undefined) {
          			break;
        		}
        		parent = val;
        		val = val[path[i]];
			}
			if (typeof val === 'function') {
				val = softBind(val, parent)
			}
			if (val === null || val === undefined) {
        		val = args[0]
      		}
      		return val;
		},
	});
};

console.log(pointer({user: {info: {address: [{city: (args) => console.log(1)}]}}}).user.info.address[0].city('暂无城市信息')())