// 浅拷贝
var obj = { a: 1, arr: [2, 3] };
var shallowObj = shallowCopy(obj);
function shallowCopy(src) {
    var dst = {};
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            dst[prop] = src[prop];
        }
    }
    return dst;
}

// console.log(shallowObj.arr[1])
// shallowObj.arr[1] = 5;
// console.log(obj.arr[1])

function deepCopy(o, c) {
    var c = c || {};
    for (var i in o) {
        if (typeof o[i] === 'object') {
            if (o[i].constructor === Array) {
                c[i] = [];
            } else {
                c[i] = {};
            }
            deepCopy(o[i], c[i])
        } else {
            c[i] = o[i];
        }
    }
    return c;
}

var deepObj = deepCopy(obj);
console.log(deepObj.arr[1])
deepObj.arr[1] = 5;
console.log(obj.arr[1])