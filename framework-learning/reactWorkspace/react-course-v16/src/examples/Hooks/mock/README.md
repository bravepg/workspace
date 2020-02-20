如果想要掌握 hooks 就需要掌握闭包的原理

脑海中浮现了这样的对比代码
```
function demo() {
  _value;
  return {
    value: _value,
    setValue(val) {
      _value = val;
    }
  }
}
```
```
function demo() {
  _value;
  return {
    getValue() {
      return _value;
    }
    setValue(val) {
      _value = val;
    }
  }
}
```
第一段代码获取 ``value`` 通过 ``value: _value``

第二段代码获取 ``value`` 通过 ``getValue()``

``getValue`` 可以引用到上层作用域中的变量，就是我们所说的闭包

在这里，突然让自己回想起之前的 ``ES6`` 和 ``module.exports`` 的不同

``module.exports`` 是值拷贝

而 ``ES6`` 是引用拷贝