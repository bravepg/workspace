``document``对象继承了``EventTarget``接口、``Node``接口、``ParentNode``接口，因此这些接口的属性和方法都可以在``document``对象上调用，比如来自``Node``接口的``childNodes``属性，来自``ParentNode``接口的``children``属性

## 🐭 属性
### 快捷方式属性
以下属性是指向文档内部的某个节点的快捷方式
* ``document.defaultView``

``document.defaultView``属性返回``document``对象所属的``window``对象。如果当前文档不属于``window``对象，该属性返回``null``
```
document.defaultView === window 
```
* ``document.doctype``

``document``对象一般有两个子节点。第一个子节点是``document.doctype``
```
var doctype = document.doctype;
doctype // "<!DOCTYPE html>"
doctype.name // "html"
```
``document.firstChild``通常就返回这个节点。
* ``document.documentElement``

``document.documentElement``属性返回当前文档的``根节点（root）``。它通常是``document``节点的第二个子节点，紧跟在``document.doctype``节点后面。``HTML``网页的该属性，一般是``<html>``节点。

* ``document.body，document.head``
``document.body``属性指向``<body>``节点，``document.head``属性指向``<head>``节点。

**这两个属性总是存在的，如果网页源码里面省略了``<head>``或``<body>``，浏览器会自动创建。另外，这两个属性是可写的，如果改写它们的值，相当于移除所有子节点**
* ``document.scrollingElement``

``document.scrollingElement``属性返回文档的滚动元素
* ``document.activeElement``

属性返回获得当前``焦点（focus）``的 ``DOM`` 元素。通常，这个属性返回的是``<input>``、``<textarea>``、``<select>``等表单元素，如果当前没有焦点元素，返回``<body>``元素或``null``
* ``document.fullscreenElement``

``document.fullscreenElement``属性返回当前以全屏状态展示的 ``DOM`` 元素。如果不是全屏状态，该属性返回``null``
```
if (document.fullscreenElement.nodeName == 'VIDEO') {
  console.log('全屏播放视频');
}
```
## 节点集合属性
以下属性返回一个``HTMLCollection``实例，表示文档内部特定元素的集合。这些集合都是动态的，原节点有任何变化，立刻会反映在集合中。
* ``document.links``

``document.links``属性返回当前文档所有设定了``href``属性的``<a>``及``<area>``节点。
```
var links = document.links;
for(var i = 0; i < links.length; i++) {
  console.log(links[i]);
}
```
* ``document.forms``

``document.forms``属性返回所有``<form>``表单节点。
* ``document.images``

``document.images``属性返回页面所有``<img>``图片节点
* ``document.embeds，document.plugins``

``document.embeds``属性和``document.plugins``属性，都返回所有``<embed>``节点。
* ``document.scripts``

``document.scripts``属性返回所有``<script>``节点
```
var scripts = document.scripts;
if (scripts.length !== 0 ) {
  console.log('当前网页有脚本');
}
```
* ``document.styleSheets``
``document.styleSheets``属性返回文档内嵌或引入的样式表集合

**除了``document.styleSheets``，以上的集合属性返回的都是``HTMLCollection``实例**
### 文档静态信息属性
* ``document.documentURI，document.URL``

表示当前文档的网址，不同之处是它们继承自不同的接口，``documentURI``继承自``Document``接口，可用于所有文档；``URL``继承自``HTMLDocument``接口，只能用于 ``HTML`` 文档
* ``document.domain``

设置``document.domain``会导致端口被改成``80``。因此，如果通过设置``document.domain``来进行通信，双方网页都必须设置这个值，才能保证端口相同。
* ``document.location``
* ``document.lastModified``
* ``document.title``
* ``document.characterSet``
* ``document.referrer``

表示当前文档的访问者来自哪里
### 文档状态属性
* ``document.hidden``

``document.hidden``属性返回一个布尔值，表示当前页面是否可见。如果窗口最小化、浏览器切换了 ``Tab``，都会导致导致页面不可见，使得``document.hidden``返回``true``
* ``document.visibilityState``

返回文档的可见状态，它的值有4种可能
1. ``visible``：页面可见。注意，页面可能是部分可见，即不是焦点窗口，前面被其他窗口部分挡住了。
2. ``hidden``：页面不可见，有可能窗口最小化，或者浏览器切换到了另一个 Tab。
3. ``prerender``：页面处于正在渲染状态，对于用于来说，该页面不可见。
4. ``unloaded``：页面从内存里面卸载了

**这个属性可以用在页面加载时，防止加载某些资源；或者页面不可见时，停掉一些页面功能。**
* ``document.readyState``

``document.readyState``属性返回当前文档的状态，共有三种可能的值。
1. ``loading``：加载 ``HTML`` 代码阶段（尚未完成解析）
2. ``interactive``：加载外部资源阶段
3. ``complete``：加载完成

> 1.浏览器开始解析 HTML 文档，document.readyState属性等于loading。

> 2.浏览器遇到 HTML 文档中的``<script>``元素，并且没有``async``或``defer``属性，就暂停解析，开始执行脚本，这时``document.readyState``属性还是等于``loading``。

> 3.``HTML`` 文档解析完成，``document.readyState``属性变成``interactive``。

> 4.浏览器等待图片、样式表、字体文件等外部资源加载完成，一旦全部加载完成，``document.readyState``属性变成``complete``
```
// 基本检查
if (document.readyState === 'complete') {
  // ...
}

// 轮询检查
var interval = setInterval(function() {
  if (document.readyState === 'complete') {
    clearInterval(interval);
    // ...
  }
}, 100);
```
**另外，每次状态变化都会触发一个``readystatechange``事件**
* ``document.cookie``
* ``document.designMode``
## 🐱 方法
* ``document.open()，document.close()``
``document.open``方法清除当前文档所有内容，使得文档处于可写状态，供``document.write``方法写入内容。

``document.close``方法用来关闭``document.open()``打开的文档。
```
document.open();
document.write('hello world');
document.close();
```
* ``document.write()，document.writeln()``
* ``document.querySelector()，document.querySelectorAll()``

``document.querySelector``方法接受一个 ``CSS`` 选择器作为参数，返回匹配该选择器的``元素节点``。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回``null``

``document.querySelectorAll``方法与``querySelector``用法类似，区别是返回一个``NodeList``对象，包含所有匹配给定选择器的节点。

这两个方法的参数，可以是逗号分隔的多个 ``CSS`` 选择器，返回匹配其中一个选择器的元素节点，这与 ``CSS`` 选择器的规则是一致的
```
var matches = document.querySelectorAll('div.note, div.alert');
```
上面代码返回``class``属性是``note``或``alert``的``div``元素。

**但是他们不支持选择伪类和伪元素**

**这两个方法除了定义在``document``对象上，还定义在元素节点上，即在元素节点上也可以调用。**
* ``document.getElementsByTagName()``

返回值是一个类似数组对象``（HTMLCollection实例）``，可以实时反映 ``HTML`` 文档的变化。如果没有任何匹配的元素，就返回一个空集。

**这个方法不仅可以在``document``对象上调用，也可以在任何元素节点上调用。**
```
var firstPara = document.getElementsByTagName('p')[0];
var spans = firstPara.getElementsByTagName('span');
```
* ``document.getElementsByClassName()``

返回一个类似数组的对象（``HTMLCollection``实例），包括了所有``class``名字符合指定条件的元素，元素的变化实时反映在返回结果中

**参数可以是多个``class``，它们之间使用空格分隔**
```
var elements = document.getElementsByClassName('foo bar');
```
上面代码返回同时具有``foo``和``bar``两个``class``的元素，``foo``和``bar``的顺序不重要。
* ``document.getElementsByName()``
* ``document.getElementById()``

与 ``document.querySelector`` 不同之处
```
document.getElementById('myElement')
document.querySelector('#myElement')
```
**这个方法比 ``document.querySelector()`` 效率高得多，只能在``document``对象上使用，不能在其他元素节点上使用。**
* ``document.createElement()``
* ``document.createTextNode()``
* ``document.createAttribute()``
```
var node = document.getElementById('div1');

var a = document.createAttribute('my_attrib');
a.value = 'newVal';

node.setAttributeNode(a);
// 或者
node.setAttribute('my_attrib', 'newVal');
```
* ``document.createElement()``
* ``document.createComment()``
* ``document.createDocumentFragment()``
* ``document.createEvent()``
* ``document.addEventListener()，document.removeEventListener()，document.dispatchEvent()``
* ``document.hasFocus()``

表示当前文档之中是否有元素被激活或获得焦点
* ``document.adoptNode()，document.importNode()``
