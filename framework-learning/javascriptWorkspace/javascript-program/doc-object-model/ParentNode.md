节点对象除了继承 ``Node`` 接口以外，还会继承其他接口。``ParentNode``接口表示当前节点是一个父节点，提供一些处理子节点的方法。``ChildNode``接口表示当前节点是一个子节点，提供一些相关方法

如果当前节点是父节点，就会继承``ParentNode``接口。由于只有``元素节点（element）``、``文档节点（document）``和``文档片段节点（documentFragment）``拥有子节点，因此只有这三类节点会继承``ParentNode``接口
## 🐘 ``ParentNode`` 接口
* ``ParentNode.children``

属性返回一个``HTMLCollection``实例，**成员是当前节点的所有元素子节点。该属性只读**
```
for (var i = 0; i < el.children.length; i++) {
  // ...
}
```
``children``属性只包括**元素子节点**，不包括其他类型的**子节点（比如文本子节点）**。如果没有元素类型的子节点，返回值``HTMLCollection``实例的``length``属性为0。

另外，``HTMLCollection``是动态集合，会实时反映 ``DOM`` 的任何变化
* ``ParentNode.firstElementChild``

``firstElementChild``属性返回当前节点的第一个元素子节点。如果没有任何元素子节点，则返回``null``
* ``ParentNode.lastElementChild``

``lastElementChild``属性返回当前节点的最后一个元素子节点，如果不存在任何元素子节点，则返回``null``
* ``ParentNode.childElementCount``

``childElementCount``属性返回一个整数，表示当前节点的所有元素子节点的数目。如果不包含任何元素子节点，则返回0
* ``ParentNode.append()，ParentNode.prepend()``
``append``方法为当前节点追加一个或多个子节点，位置是最后一个元素子节点的后面。

该方法不仅可以添加元素子节点，还可以添加文本子节点

**注意和``appendChild``的区别**
1. ``appendChild``只能接受一个参数，``append``可以接受多个参数
3. ``appendChild``的返回值是要追加的元素，``append``的方法没有返回值

```
var parent = document.body;

// 添加元素子节点
var p = document.createElement('p');
parent.append(p);

// 添加文本子节点
parent.append('Hello');

// 添加多个元素子节点
var p1 = document.createElement('p');
var p2 = document.createElement('p');
parent.append(p1, p2);

// 添加元素子节点和文本子节点
var p = document.createElement('p');
parent.append('Hello', p);
```
## 🦢 ``ChildNode`` 接口
* ``ChildNode.remove()``

``remove``方法用于从父节点移除当前节点。
* ``ChildNode.before()，ChildNode.after()``

``before``方法用于在当前节点的前面，插入一个或多个同级节点。两者拥有相同的父节点。

**注意，该方法不仅可以插入元素节点，还可以插入文本节点。**

* ``ChildNode.replaceWith()``
``replaceWith``方法使用参数节点，替换当前节点。参数可以是元素节点，也可以是文本节点。