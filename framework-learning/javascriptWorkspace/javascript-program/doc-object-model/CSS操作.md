# 通过 ``JavaScript`` 操作 ``CSS``

## 最简单的操作
使用 ``getAttribute`` 方法、``setAttribute`` 方法和``removeAttribute`` 方法，直接读写或删除网页元素的 ``style`` 属性
```
div.setAttribute(
  'style',
  'background-color:red;' + 'border:1px solid black;'
);
```

## ``CSSStyleDeclaration`` 接口
* 元素节点的 ``style`` 属性（``Element.style``）
* ``CSSStyle``实例的 ``style`` 属性
* ``window.getComputedStyle()`` 的返回值

**注意：``getAttribute``返回的是字符串**

``CSSStyleDeclaration`` 接口可以直接读写 ``CSS`` 的样式属性，不过，连词号需要变成骆驼拼写法。
```
var divStyle = document.querySelector('div').style;

divStyle.backgroundColor = 'red';
divStyle.border = '1px solid black';
divStyle.width = '100px';
divStyle.height = '100px';
divStyle.fontSize = '10em';

divStyle.backgroundColor // red
divStyle.border // 1px solid black
divStyle.height // 100px
divStyle.width // 100px
```
**另外，``Element.style`` 返回的只是行内样式，并不是该元素的全部样式。通过样式表设置的样式，或者从父元素继承的样式，无法通过这个属性得到。元素的全部样式要通过 ``window.getComputedStyle()`` 得到**

### ``CSSStyleDeclaration`` 实例属性
* ``CSSStyleDeclaration.cssText``

用来读写当前规则的所有样式声明文本

**删除一个元素的所有行内样式，最简便的方法就是设置 ``cssText`` 为空字符串。**
```
divStyle.cssText = '';
```
* ``CSSStyleDeclaration.length``

表示当前规则包含多少条样式声明
* ``CSSStyleDeclaration.parentRule``

``CSSStyleDeclaration.parentRule`` 属性返回当前规则所属的那个样式块（``CSSRule 实例``）。如果不存在所属的样式块，该属性返回 ``null``
```
var declaration = document.styleSheets[0].rules[0].style;
declaration.parentRule === document.styleSheets[0].rules[0]
```
### ``CSSStyleDeclaration`` 实例方法
* ``CSSStyleDeclaration.getPropertyPriority()``

接受 ``CSS`` 样式的属性名作为参数，返回一个字符串，表示有没有设置``important``优先级。如果有就返回``important``，否则返回空字符串。
```
// HTML 代码为
// <div id="myDiv" style="margin: 10px!important; color: red;"/>
var style = document.getElementById('myDiv').style;
style.margin // "10px"
style.getPropertyPriority('margin') // "important"
style.getPropertyPriority('color') // ""
```
* ``CSSStyleDeclaration.getPropertyValue()``

返回一个字符串，表示该属性的属性值
```
// HTML 代码为
// <div id="myDiv" style="margin: 10px!important; color: red;"/>
var style = document.getElementById('myDiv').style;
style.margin // "10px"
style.getPropertyValue("margin") // "10px"
```
* ``CSSStyleDeclaration.item()``

返回指定位置的 ``CSS`` 属性名
```
// HTML 代码为
// <div id="myDiv" style="color: red; background-color: white;"/>
var style = document.getElementById('myDiv').style;
style.item(0) // "color"
style.item(1) // "background-color"
```
**如果没有提供参数，这个方法会报错。如果参数值超过实际的属性数目，这个方法返回一个空字符值。**
* ``CSSStyleDeclaration.removeProperty()``

接受一个属性名作为参数，在 ``CSS`` 规则里面移除这个属性，**返回这个属性原来的值。**
* ``CSSStyleDeclaration.setProperty()``

该方法可以接受三个参数
1. 属性名，该参数是必需
2. 属性值，该参数可选。如果省略，则参数值默认为空字符串
3. 优先级，该参数可选。如果设置，唯一的合法值是``important``，表示 ``CSS`` 规则里面的``!important``

## ``CSS`` 对象
* ``CSS.escape()``

转义 ``CSS`` 选择器里面的特殊字符

比如对于
```
<div id="foo#bar">
```
不可以直接写成
```
document.querySelector('#foo#bar')
```
而是要写成
```
document.querySelector('#' + CSS.escape('foo#bar'))
```
* ``CSS.supports()``
表示当前环境是否支持某一句 ``CSS`` 规则
```
// 第一种写法
CSS.supports('transform-origin', '5px') // true

// 第二种写法
CSS.supports('display: table-cell') // true
```
**注意，第二种写法的参数结尾不能带有分号，否则结果不准确。**
```
CSS.supports('display: table-cell;') // false
```
## ``window.getComputedStyle()``
不像 ``Element.style`` 那样只会返回行内样式，``window.getComputedStyle``方法，用来返回浏览器计算后得到的最终规则，返回一个 ``CSSStyleDeclaration``
```
var div = document.querySelector('div');
var styleObj = window.getComputedStyle(div);
styleObj.backgroundColor
```
**``CSSStyleDeclaration`` 实例是一个活的对象，任何对于样式的修改，会实时反映到这个实例上面。另外，这个实例是只读的。**

``getComputedStyle`` 方法还可以接受第二个参数，表示当前元素的伪元素
```
var result = window.getComputedStyle(div, ':before');
```

注意事项
* ``CSSStyleDeclaration`` 实例返回的 ``CSS`` 值都是绝对单位。比如，长度都是像素单位（返回值包括``px``后缀），颜色是``rgb(#, #, #)``或``rgba(#, #, #, #)``格式。
* ``CSS`` 规则的简写形式无效。比如，想读取``margin``属性的值，不能直接读，只能读``marginLeft``、``marginTop``等属性；
* 如果读取 ``CSS`` 原始的属性名，要用方括号运算符，比如``styleObj['z-index']``；如果读取骆驼拼写法的 CSS 属性名，可以直接读取``styleObj.zIndex``
* 该方法返回的 ``CSSStyleDeclaration`` 实例的cssText属性无效，返回``undefined``。

## ``CSS`` 伪元素
节点元素的``style``对象无法读写伪元素的样式，这时就要用到``window.getComputedStyle()``

可以使用 ``CSSStyleDeclaration`` 实例的 ``getPropertyValue`` 方法，获取伪元素的属性。
```
var result = window.getComputedStyle(test, ':before')
  .getPropertyValue('content');
var color = window.getComputedStyle(test, ':before')
  .getPropertyValue('color');
```
## ``StyleSheet`` 接口
``StyleSheet`` 接口代表网页的一张样式表，包括 ``<link>`` 元素加载的样式表和 ``<style>`` 元素内嵌的样式表

``document`` 对象的 ``styleSheets`` 属性，可以返回当前页面的所有 ``StyleSheet`` 实例（即所有样式表）。它是一个类似数组的对象
```
var sheets = document.styleSheets;
var sheet = document.styleSheets[0];
sheet instanceof StyleSheet // true
```
### 实例属性
* ``StyleSheet.disabled``

表示该样式是否处于禁用状态，默认是 ``false``，只能通过 ``JavaScript`` 来进行设置，无法通过 ``HTML`` 设置，当设置为 ``true``，样式会禁用不生效
```
document.styleSheets[0].disabled = true;
```
* ``Stylesheet.href``

返回样式表的网址，对于内嵌样式表，该属性返回 ``null``
```
document.styleSheets[0].href;
```
* ``StyleSheet.media``

表示当前样式表适用的媒介字符串，是用于屏幕（screen），还是用于打印（print）或手持设备（handheld），或各种媒介都适用（all），默认值是 ``screen``
```
document.styleSheets[0].media.mediaText
```

``MediaList`` 实例的 ``appendMedium`` 方法，用于增加媒介；``deleteMedium`` 方法用于删除媒介。
```
document.styleSheets[0].media.appendMedium('handheld');
document.styleSheets[0].media.deleteMedium('print');
```
* ``StyleSheet.title``

属性返回样式表的 ``title`` 属性。
* ``StyleSheet.type``

属性返回样式表的 ``type`` 属性，通常是 ``text/css``
* ``StyleSheet.parentStyleSheet``

``CSS`` 的 ``@import`` 命令允许在样式表中加载其他样式表，``StyleSheet.parentStyleSheet`` 属性返回包含了当前样式表的那张样式表。如果当前样式表是顶层样式表，则该属性返回``null``。
```
if (stylesheet.parentStyleSheet) {
  sheet = stylesheet.parentStyleSheet;
} else {
  sheet = stylesheet;
}
```
* ``StyleSheet.ownerNode``

``StyleSheet.ownerNode`` 属性返回 ``StyleSheet`` 对象所在的 ``DOM`` 节点，通常是 ``<link>`` 或 ``<style>`` 。对于那些由其他样式表引用的样式表，该属性为 ``null``
* ``StyleSheet.cssRules``

指向一个类似数组的对象（ ``CSSRuleList`` 实例），里面每一个成员就是当前样式表的一条 ``CSS`` 规则。使用该规则的 ``cssText`` 属性，可以得到 ``CSS`` 规则对应的字符串。
```
var sheet = document.querySelector('#styleElement').sheet;

sheet.cssRules[0].cssText
// "body { background-color: red; margin: 20px; }"

sheet.cssRules[1].cssText
// "p { line-height: 1.4em; color: blue; }"
```
* ``StyleSheet.ownerRule``

有些样式表是通过 ``@import`` 规则输入的，它的 ``ownerRule`` 属性会返回一个 ``CSSRule`` 实例，代表那行 ``@import`` 规则。如果当前样式表不是通过 ``@import`` 引入的，``ownerRule`` 属性返回 ``null``。
### 实例方法
* ``CSSStyleSheet.insertRule()``

方法用于在当前样式表的插入一个新的 ``CSS`` 规则。
```
var sheet = document.querySelector('#styleElement').sheet;
sheet.insertRule('#block { color: white }', 0);
sheet.insertRule('p { color: red }', 1);
```
* ``CSSStyleSheet.deleteRule()``

方法用来在样式表里面移除一条规则，它的参数是该条规则在 ``cssRules`` 对象中的位置。该方法没有返回值。
```
document.styleSheets[0].deleteRule(1);
```
## ``CSSRuleList`` 接口
``CSSRuleList`` 接口是一个类似数组的对象，表示一组 ``CSS`` 规则，成员都是 ``CSSRule`` 实例，一般通过 ``StyleSheet.cssRules`` 获取 ``CSSRuleList`` 实例
```
// HTML 代码如下
// <style id="myStyle">
//   h1 { color: red; }
//   p { color: blue; }
// </style>
var myStyleSheet = document.getElementById('myStyle').sheet;
var crl = myStyleSheet.cssRules;
crl instanceof CSSRuleList // true
```
每一条规则``（CSSRule 实例）``可以通过``rules.item(index)``或者``rules[index]``拿到

**添加规则和删除规则不能在 ``CSSRuleList`` 实例操作，而要在它的父元素 ``StyleSheet`` 实例上，通过 ``StyleSheet.insertRule()`` 和 ``StyleSheet.deleteRule()`` 操作。**
## ``CSSRule`` 接口
通过 ``CSSRule`` 接口操作 ``CSS`` 规则。一般通过 ``CSSRuleList`` 接口``（StyleSheet.cssRules）`` 获取  ``CSSRule`` 实例。
### ``CSSRule`` 实例的属性
* ``CSSRule.cssText``

返回当前规则的文本
* ``CSSRule.parentStyleSheet``

返回当前规则所在的样式表对象``（StyleSheet 实例）``
```
rule.parentStyleSheet === myStyleSheet // true
```
* ``CSSRule.parentRule``

``CSSRule.parentRule`` 属性返回包含当前规则的父规则，如果不存在父规则（即当前规则是顶层规则），则返回 ``null``

* ``CSSRule.type``
1. 普通样式规则（``CSSStyleRule`` 实例）
2. ``@import`` 规则
3. ``@media`` 规则（``CSSMediaRule`` 实例）
4. ``@font-face``规则
### ``CSSStyleRule`` 接口
如果一条 ``CSS`` 规则是普通的样式规则（不含特殊的 ``CSS`` 命令），那么除了 ``CSSRule`` 接口，它还部署了 ``CSSStyleRule`` 接口。
* ``CSSStyleRule.selectorText``

属性返回当前规则的选择器。
```
var stylesheet = document.styleSheets[0];
stylesheet.cssRules[0].selectorText // ".myClass"
```
* ``CSSStyleRule.style``
``CSSStyleRule.style`` 属性返回一个对象（``CSSStyleDeclaration`` 实例），代表当前规则的样式声明，也就是选择器后面的大括号里面的部分
### ``CSSMediaRule`` 接口
如果一条 ``CSS`` 规则是``@media``代码块，那么它除了 ``CSSRule`` 接口，还部署了 ``CSSMediaRule`` 接口

