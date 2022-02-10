(function (window, undefined) {
	'use strict';
	var seed = function () {
		var rProtocol = /^(file\:.+\:\/|[\w\-]+\:\/\/)/,
			rModId = /([^\/?]+?)(\.(?:js|css))?(\?.*)?$/,
			rReadyState = /loaded|complete|undefined/,

			moduleCache = {},    // 模块加载时的队列数据存储对象

			head = document.head || document.getElementsByTagName('head')[0] || document.documentElement,

			modClassName = 'seed_mod_' + (+new Date()) + (Math.random() + '').slice(-8),
			isScriptOnload = !!document.addEventListener,

			// 模块加载器的配置对象
			moduleOptions = { baseUrl: null };

		var easyModule = {
			// 用于合并模块加载器配置的工具函数
			merge: function (key, options) {
				if (options) {
					var name;

					for (name in options) {
						moduleOptions[key][name] = options[name];
					}
				}
			},

			// 初始化模块加载器时获取 baseUrl (即当前 js文 件加载的 url)
			init: function () {
				// 获取执行该文件的 script 链接
				// getElementsByTagName 返回的是集合是动态的
				const scripts = document.getElementsByTagName('script');
				const script = scripts[scripts.length - 1];

				const initMod = script.getAttribute('data-main');
				const initBaseUrl = script.getAttribute('data-baseurl');
				let url = script.hasAttribute ? script.src : script.getAttribute('src', 4);

				// 如果seed是通过script标签inline添加到页面中其baseUrl就是当前页面的路径
				url = url || window.location.href;

				// todo
				moduleOptions.baseUrl = initBaseUrl ?
					easyModule.mergePath(initBaseUrl, window.location.href) :
					url.slice(0, url.lastIndexOf('/') + 1);

				// 初始化时加载 data-main 中的模块
				if (initMod) {
					seedExports.use(initMod);
				}
			},

			// 获取当前运行脚本的文件的名称
			// 用于获取匿名模块的模块名
			getCurrentScript: function () {
				var script, scripts, i, stack;

				// 标准浏览器(IE10、Chrome、Opera、Safari、Firefox)通过强制捕获错误(e.stack)来确定为当前运行的脚本
				// http://www.cnblogs.com/rubylouvre/archive/2013/01/23/2872618.html        
				try {
					// 运行一个不存在的方法强制制造错误
					easyModule.makeerror();
				}
				// 捕获错误
				// safari的错误对象只有line,sourceId,sourceURL
				catch (e) {
					stack = e.stack;
				}

				if (stack) {
					// 取得最后一行,最后一个空格或@之后的部分
					stack = stack.split(/[@ ]/g).pop();
					// 去掉换行符
					stack = stack[0] === '(' ? stack.slice(1, -1) : stack.replace(/\s/, '');
					//去掉行号与或许存在的出错字符起始位置
					return stack.replace(/(:\d+)?:\d+$/i, '').match(rModId)[1];
				}

				// IE6-8通过遍历script标签，判断其readyState为interactive来确定为当前运行的脚本
				scripts = head.getElementsByTagName('script');
				i = scripts.length - 1;

				for (; i >= 0; i--) {
					script = scripts[i];
					if (script.className === modClassName && script.readyState === 'interactive') {
						break;
					}
				}

				return script.src.match(rModId)[1];
			},

			// 将模块标识(相对路径)和基础路径合并成新的真正的模块路径(不含模块的文件名)
			mergePath: function (id, url) {
				const isRootDir = id.charAt(0) === '/';
				const isHttp = url.slice(0, 4) === 'http';
				const protocol = url.match(rProtocol)[1];
				let domain = '';
				url = url.slice(protocol.length);
				// HTTP协议的路径含有域名
				if (isHttp) {
					domain = url.slice(0, url.indexOf('/') + 1);
					url = isRootDir ? '' : url.slice(domain.length);
				}
				// 组装基础路径的目录数组
				const urlDir = url.split('/');
				urlDir.pop();
				// 组装模块标识的目录数组
				const idDir = id.split('/');
				idDir.pop();

				if (isRootDir) {
					idDir.shift();
				}
				for (let i = 0; i < idDir.length; i++) {
					const dir = idDir[i];
					// 模块标识的目录数组中含有../则基础路径的目录数组删除最后一个目录
					// 否则直接将模块标识的目录数组的元素添加到基础路径的目录数组中        
					if (dir === '..') {
						urlDir.pop();
					} else if (dir !== '.') {
						urlDir.push(dir);
					}
				}

				// 基础路径的目录数组转换成目录字符串
				let dirPath = urlDir.join('/');
				// 无目录的情况不用加斜杠
				dirPath = dirPath === '' ? '' : dirPath + '/';
				console.log('id, url', id, url, protocol, domain, dirPath);
				return protocol + domain + dirPath;
			},

			/*
			 * 解析模块标识，返回模块名和模块路径
			 * @parmm { String } 模块标识
			 * @param { String } 基础路径baseUrl
			 * @return { Array } [ 模块名, 模块路径 ]
			 * =====================================================================
			 * 解析规则：
			 * baseUrl = http://easyjs.org/js/                                
			 * http://example.com/test.js => [ test, http://example.com/test.js ]
			 *                  style.css => [ test, http://easyjs.org/js/style.css ]
			 *                   ajax/xhr => [ xhr, http://easyjs.org/js/ajax/xhr.js ]
			 *                    ../core => [ core, http://easyjs.org/core.js ]
			 *                    test.js => [ test, http://easyjs.org/js/test.js ]
			 *                       test => [ test, http://easyjs.org/js/test.js ]
			 *          test.js?v20121202 => [ test, http://easyjs.org/js/test.js?v20121202 ]
			 * =====================================================================
			 */
			parseModId: function (id, url) {
				const isAbsoluteId = rProtocol.test(id);
				const result = id.match(rModId);
				const [_, modName, suffix = '.js', search = ''] = result;
				// 模块标识为绝对路径时，标识就是基础路径
				if (isAbsoluteId) {
					url = id;
					id = '';
				}
				const baseUrl = easyModule.mergePath(id, url);
				const modUrl = baseUrl + modName + suffix + search;
				return [modName, modUrl];
			},

			/*
			 * 将依赖模块列表的外部接口(exports)合并成arguments
			 * @param { Array }    依赖模块列表
			 * @return { Array } 返回参数数组
			 */
			getExports: function (deps) {
				if (deps) {
					const { module } = seedExports;
					const arr = [];

					for (let i = 0; i < deps.length; i++) {
						arr[i] = module[deps[i]]?.exports;
					}

					return arr;
				}

				return [];
			},

			/*
			 * 测试该模块的依赖模块是否都已加载并执行完
			 * @param { Object } 模块对象
			 * @return { Boolean } 依赖模块是否都加载并执行完
			 */
			isLoaded: function (mod) {
				const deps = mod.deps;
				const { module } = seedExports;

				for (let i = 0; i < deps.length; i++) {
					const depMod = module[deps[i]];
					if (depMod.status !== 4) {
						return false;
					}
				}
				return true;
			},

			factoryHandle: function (mod, factory, data) {
				// 模块解析完毕，所有的依赖模块也都加载完，但还未输出 exports
				mod.status = 3;

				const args = easyModule.getExports(mod.deps);
				const exports = typeof factory === 'function' ? factory.apply(null, args) : factory;

				if (exports !== undefined) {
					// 存储exports到当前模块的缓存中
					mod.exports = exports;
				}

				// 当前模块加载并执行完毕，exports已可用
				mod.status = 4;

				if (data) {
					data.length--;
				}
			},

			/*
			 * 触发被依赖模块的factory
			 * @param { Object } 模块的缓存对象
			 */
			fireFactory: function (useKey) {
				const data = moduleCache[useKey];
				const factorys = data.factorys;
				const result = factorys[0];

				if (!result) {
					return;
				}

				const name = result.name;
				const toDepMod = seedExports.module[name];

				console.log('toDepMod---', JSON.stringify(toDepMod), '----', JSON.stringify(moduleCache), easyModule.isLoaded(toDepMod), result.factory, useKey);

				if (easyModule.isLoaded(toDepMod)) {
					factorys.shift();
					easyModule.factoryHandle(toDepMod, result.factory, data);

					if (factorys.length) {
						easyModule.fireFactory(useKey);
					}
				}
			},

			/*
			 * 模块加载完触发的回调函数
			 * @param{ Object } 模块对象
			 */
			complete: function (mod, url) {
				const { module } = seedExports;
				const { useKey } = mod;

				for (let k = 0; k < useKey.length; k++) {
					const key = useKey[k];
					const data = moduleCache[key];
					console.log('module complete----', JSON.stringify(module), '----', JSON.stringify(moduleCache), key, '----', url);
					useKey.splice(k--, 1);

					if (!data) {
						continue;
					}
					// 队列没加载完将继续加载
					if (data.urls.length) {
						easyModule.load(key);
					} else if (!data.length) {
						const namesCache = data.namesCache;
						const args = [];
						// 合并模块的 exports 为 arguments
						for (let i = 0; i < namesCache.length; i++) {
							const name = namesCache[i];
							const cacheMod = module[name];

							if (cacheMod.status !== 4) {
								return;
							}
							args[i] = cacheMod.exports;
						}

						// 执行 use 的回调
						if (data.callback) {
							data.callback.apply(null, args);
						}

						// 删除队列数据
						delete moduleCache[key];
					}
				}
			},

			/*
			 * 创建script/link元素来动态加载JS/CSS资源
			 * @param{ String } 模块的URL
			 * @param{ String } 模块名
			 * @param{ String } 用来访问存储在moduleCache中的数据的属性名
			 * @return { HTMLElement } 用于添加到head中来进行模块加载的元素
			 */
			create: function (url, name, useKey) {
				const mod = seedExports.module[name];
				mod.status = 1;
				// CSS模块的处理
				if (~url.indexOf('.css')) {
					const link = document.createElement('link');
					link.rel = 'stylesheet';
					link.href = url;
					link.onload = link.onerror = function () {
						mod.status = 4;
						moduleCache[useKey].length--;
						easyModule.fireFactory(useKey);
						easyModule.complete(mod);
					};
					return link;
				}

				// JS模块的处理
				const script = document.createElement('script');
				script.className = modClassName;
				script.async = true;
				if (isScriptOnload) {
					script.onerror = function () {
						console.error('[' + name + '] module failed to load, the url is ' + url + '.');
					};
				}
				script[isScriptOnload ? 'onload' : 'onreadystatechange'] = function () {
					if (isScriptOnload || rReadyState.test(script.readyState)) {
						// mod.status = 4;
						// 加载成功
						easyModule.complete(mod, url);
					}
				};
				script.src = url;
				return script;
			},

			/*
			 * 加载模块
			 * @param { String } 用来访问存储在moduleCache中的数据的属性名
			 */
			load: function (useKey) {
				const data = moduleCache[useKey];
				const { module } = seedExports;
				const names = data.names.shift();
				const urls = data.urls.shift();

				for (let i = 0; i < urls.length; i++) {
					const mod = module[names[i]];
					if (mod.useKey === undefined) {
						mod.useKey = [];
					}
					mod.useKey.push(useKey);

					if (module[names[i]].status === undefined) {
						const script = easyModule.create(urls[i], names[i], useKey);
						console.log('module load----', JSON.stringify(module), '----', JSON.stringify(moduleCache), useKey);
						head.insertBefore(script, head.firstChild);
					} else {
						data.length--;
					}
				}
			}
		};

		var seedExports = {

			version: '1.1.2',

			module: {},

			use: function (ids, fn) {
				// 第一次是 data-main 定义的
				const moduleIds = typeof ids === 'string' ? [ids] : ids;
				const { module } = seedExports;
				const modNames = [];
				const modUrls = [];
				let isLoaded = false;
				let namesCache = [];

				for (let i = 0; i < moduleIds.length; i++) {
					const id = moduleIds[i];
					// 获取解析后的模块名和 url
					const result = easyModule.parseModId(id, moduleOptions.baseUrl);
					const modName = result[0];
					let mod = module[modName];

					if (!mod) {
						mod = module[modName] = {};
						isLoaded = false;
					} else if (mod.status === 4) {
						isLoaded = true;
					}
					// 将模块名和模块路径添加到队列中
					modNames[modNames.length++] = modName;
					modUrls[modUrls.length++] = mod.url = result[1];
				}

				// 生成队列的随机属性名
				const useKey = modNames.join('_') + '_' + (+new Date()) + (Math.random() + '').slice(-8);
				// 复制模块名，在输出 exports 时会用到
				namesCache = namesCache.concat(modNames);

				// 在模块都合并的情况下直接执行 callback
				if (isLoaded) {
					const args = [];
					// 合并模块的 exports 为 arguments
					for (let i = 0; i < namesCache.length; i++) {
						const name = namesCache[i];
						const mod = module[name];

						if (mod.status !== 4) {
							console.error('[' + name + '] module failed to use.');
						}

						args[i] = mod.exports;
					}

					// 执行 use 的回调
					if (fn) {
						fn.apply(null, args);
					}
					return;
				}
				// 添加队列
				moduleCache[useKey] = {
					length: namesCache.length,
					namesCache: namesCache,
					names: [modNames],
					urls: [modUrls],
					callback: fn,
					factorys: [],
					deps: {}
				};
				// 开始加载
				easyModule.load(useKey);
			},

			/*
			 * 修改模块加载器的配置
			 * @param { Object }
			 */
			config: function (options) {
				var baseUrl, isHttp;

				if (options.baseUrl) {
					baseUrl = options.baseUrl;
					isHttp = baseUrl.slice(0, 4) === 'http';

					if (isHttp) {
						moduleOptions.baseUrl = baseUrl;
					}
					// 相对路径的baseUlr是基于HTML页面所在的路径(无论是http地址还是file地址)
					else {
						moduleOptions.baseUrl = easyModule.mergePath(baseUrl, window.location.href);
					}
				}
			}

		};

		/*
		 * 定义模块的全局方法(AMD规范)
		 * @param { String } 模块名
		 * @param { Array } 依赖模块列表，单个可以用字符串形式传参，多个用数组形式传参
		 * @param { Function } 模块的内容
		 * factory的参数对应依赖模块的外部接口(exports)
		 */
		window.define = function (name, deps, factory) {
			// 支持各种形式调用 define('name', [], function)、define(function)
			if (typeof name !== 'string') {
				factory = deps;
				deps = name;
				name = easyModule.getCurrentScript();
			}
			if (!Array.isArray(deps)) {
				factory = deps;
				deps = null;
			}

			const { module } = seedExports;
			let mod = module[name];
			// 在模块都合并的情况下直接执行factory
			if (!mod) {
				mod = module[name] = {};
				if (deps) {
					mod.deps = deps;
				}
				easyModule.factoryHandle(mod, factory);
				return;
			}
			const useKey = mod.useKey[0];
			const data = moduleCache[useKey];
			const names = [];
			const urls = [];
			let isLoaded = true;

			// 开始解析模块内容
			mod.status = 2;
			mod.deps = [];
			// 如果有依赖模块，先加载依赖模块
			console.log('module define start----', name, '-----', JSON.stringify(module), '----', JSON.stringify(moduleCache), deps, isLoaded);
			if (deps && deps.length) {
				const modUrl = mod.url;
				// 依赖模块的 baseUrl 是当前模块的 baseUrl
				const baseUrl = modUrl.slice(0, modUrl.lastIndexOf('/') + 1);
				// 修改 moduleCache 数据
				const factorys = data.factorys;
				const depsData = data.deps[name] = {};

				let repeatName, depMod, isRepeat = false;
				// 遍历依赖模块列表，如果该依赖模块没加载过，
				// 则将该依赖模块名和模块路径添加到当前模块加载队列的数据去进行加载
				for (let i = 0; i < deps.length; i++) {
					const dep = deps[i];
					const result = easyModule.parseModId(dep, baseUrl);
					const depName = result[0];
					depMod = module[depName];
					mod.deps.push(depName);
					depsData[depName] = true;

					if (depMod) {
						if (depMod.status !== 4) {
							// 获取第一个重复依赖的模块名，会在稍后进行factorys的顺序调整
							if (!isRepeat) {
								isRepeat = true;
								repeatName = depName;
							}
							isLoaded = false;
						}
						deps.splice(i--, 1);
						continue;
					} else {
						depMod = module[depName] = {};
					}

					isLoaded = false;
					data.length++;
					names[names.length++] = depName;
					urls[urls.length++] = depMod.url = result[1];
				}


				// 只要当前模块有一个依赖模块没加载完就将当前模块的 factory 添加到 factorys 中
				if (!isLoaded) {
					factorys.unshift({
						name: name,
						factory: factory
					});
					// console.log('module define', name, JSON.stringify(depMod), JSON.stringify(moduleCache), '-----', JSON.stringify(module));

					// 有重复依赖时将调整 factorys 的顺序
					if (repeatName) {
						const repeatDepsData = data.deps[repeatName];
						let insertIndex = 0;
						let pullIndex = 0;
						for (let i = factorys.length - 1; i >= 0; i--) {
							const result = factorys[i].name;
							if (result === repeatName) {
								pullIndex = i;
								if (!repeatDepsData) {
									break;
								}
							}

							if (repeatDepsData && repeatDepsData[result]) {
								insertIndex = i;
								break;
							}
						}

						// 将重复模块的factory插入到该模块最后一个依赖模块的factory后
						factorys.splice(insertIndex + 1, 0, factorys.splice(pullIndex, 1)[0]);
						// 将当前模块的factory插入到重复模块的factory后
						factorys.splice(insertIndex + 1, 0, factorys.shift());
					}
				}

				if (names.length) {
					data.names.unshift(names);
					data.urls.unshift(urls);
				}
			}
			console.log('module define end----', name, '-----', JSON.stringify(module), '----', JSON.stringify(moduleCache), deps, isLoaded);
			// 该模块无依赖模块就直接执行其factory
			if (isLoaded) {
				easyModule.factoryHandle(mod, factory, data);
			}

			easyModule.fireFactory(useKey);

			// 无依赖列表将删除依赖列表的数组 
			if (!mod.deps.length) {
				delete mod.deps;
			}
		};

		// 初始化模块加载器
		easyModule.init();

		return seedExports;
	};

	window.seed = seed();

})(window);