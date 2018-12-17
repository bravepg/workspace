节点都是单个对象，有时需要一种数据结构，能够容纳多个节点。DOM 提供两种节点集合，用于容纳多个节点：``NodeList``和``HTMLCollection``。
## 🐯 ``NodeList`` 接口
获取``NodeList``实例的方式
```
Node.childNodes
document.querySelectorAll()
document.getElementsByTagName()
```
注意，``NodeList`` 实例可能是动态集合，也可能是静态集合。所谓动态集合就是一个活的集合，``DOM`` 删除或新增一个相关节点，都会立刻反映在 ``NodeList`` 实例。目前，只有``Node.childNodes``返回的是一个动态集合，其他的 ``NodeList`` 都是静态集合
```
var children = document.body.childNodes;
children.length // 18
document.body.appendChild(document.createElement('p'));
children.length // 19
```
## 🦁️ ``HTMLCollection`` 接口
``HTMLCollection``是一个节点对象的集合，只能包含``元素节点（element）``，不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与``NodeList``接口不同，``HTMLCollection``没有``forEach``方法，只能使用``for``循环遍历

返回``HTMLCollection``实例的，主要是一些``Document``对象的集合属性，比如``document.links``、``docuement.forms``、``document.images``等

**``HTMLCollection``实例都是动态集合，节点的变化会实时反映在集合中**