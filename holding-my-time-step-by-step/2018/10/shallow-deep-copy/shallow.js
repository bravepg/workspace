/**
 * 浅拷贝很简单，只要将一个对象的属性全部拷贝到另一个对象，不去考虑属性是否是引用类型的值
 */
function shallow(source) {
    var target = {};
    for (let key in source) {        // 遍历原型和实例上的属性
        if (source.hasOwnProperty) { // 只拷贝属于实例上的属性
            target[key] = source[key];
        }
    }
    return target;
}