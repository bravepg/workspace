/**
 * 最简单的深拷贝就是在浅拷贝的基础上加上递归操作
 */
// function deep(source) {
//     var target = {};
//     for (let key in source) {
//         if (source.hasOwnProperty(key)) {
//             let val = source[key];
//             if (typeof val === 'object') {
//                 target[key] = deep(val);
//             } else {
//                 target[key] = val;
//             }
//         } 
//     }
//     return target;
// }

/**
 * 上述的写法存在以下几种问题
 * 1. 如果源对象的属性是数组的情况没有考虑
 * 2. 判断是否对象的逻辑不够严谨
 * 3. 没有对参数做检验
 */
// 改进版
function isObject(source) {
    return Object.prototype.toString.call(source) === '[object Object]';
}
function isArray(source) {
    return Object.prototype.toString.call(source) === '[object Array]';
}
function deep(source) {
    if (!isObject(source) || !isArray(source)) return source;
    var target;
    if (isObject(source)) target = {};
    if (isArray(source)) target = [];
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            let val = source[key];
            if (typeof val === 'object' || typeof val === 'array') {
                target[key] = deep(val);
            } else {
                target[key] = val;
            }
        } 
    }
    return target;
}

/**
 * 上述代码已经进行了一版改进，其实最大的问题还没有解决问题：递归爆栈
 * 
 * 我们可以使用循环来解决递归爆栈的问题
 */
function cloneLoop(x) {
    const root = {};

    const uniqueList = []; // 用来去重

    const stack = [{
        parent: root,
        key: undefined,
        data: x
    }];
    while (stack.length) {
        const node = stack.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        let res = parent;
        if (key !== undefined) {
            res = parent[key] = {};
        }

        // =============
        // 数据已经存在
        let uniqueData = find(uniqueList, data);
        if (uniqueData) {
            parent[key] = uniqueData.target;
            break; // 中断本次循环
        }

        // 数据不存在
        // 保存源数据，在拷贝数据中对应的引用
        uniqueList.push({
            source: data,
            target: res,
        });

        for (key in data) {
            if (data.hasOwnProperty(key)) {
                if (typeof data[key] === 'object') {
                    stack.push({
                        parent: res,
                        key: key,
                        data: data[key]
                    })
                } else {
                    res[k] = data[k];
                }
            }
        }
    }
    return root;
}

function find(arr, item) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].source === item) {
            return arr[i];
        }
    }

    return null;
}
// function createData(deep, breadth) {
//     var data = {};
//     var temp = data;
//     for (var i = 0; i < deep; i++) {
//         temp = temp['data'] = {};
//         for (var j = 0; j < breadth; j++) {
//             temp[j] = j;
//         }
//     }

//     return data;
// }
