``FC`` 的全称是 ``Formatting Contexts``（格式化上下文），它是页面中的一块区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
## ``BFC``
块级格式化上下文，它就是页面上的一个隔离的渲染区域，容器内的子元素不会在布局上影响到外面的元素，反之也如此，那么如何产生 ``BFC`` ?
* ``body`` 根元素
* ``float`` 的值不为 ``none``
* ``overflow`` 的值不为 ``visible``
* ``position`` 的值不为 ``relative`` 和 ``static``
* ``display`` 的值为 ``table-cell``, ``table-caption`` , ``inline-block中`` 的任何一个。 

**特性**
* 内部的盒子会在垂直方向，一个个地放置
* ``BFC`` 是页面上的一个隔离的独立容器
* 属于同一个 ``BFC`` 的两个相邻 ``Box`` 的 上下 ``margin`` 会发生重叠，也就是在 ``BFC`` 中,两个相邻块级盒子之间垂直方向上的**外边距是会塌陷的**
* 计算 ``BFC`` 的高度时，浮动元素也参与计算
* 每个元素的左边，与包含的盒子的左边相接触，即使存在浮动也是如此
* ``BFC`` 的区域不会与 ``float`` 重叠

```
<div style="border: 1px solid #000;">
    <div style="width: 50px; height: 50px; background: #eee; float: left;">
    </div>
</div>
```
外层的 ``div`` 会无法包含 内部浮动的 ``div``，效果见下图
![](https://user-gold-cdn.xitu.io/2018/12/27/167edd54682f1c4f?w=584&h=182&f=png&s=4506)
但如果我们 触发外部容器的 ``BFC`` ，根据 ``BFC`` 规则：计算 ``BFC`` 的高度时，浮动元素也参与计算，那么外部 ``div`` 容器就可以包裹着浮动元素
![](https://user-gold-cdn.xitu.io/2018/12/27/167edd823c0f41c9?w=690&h=258&f=png&s=6044)

```
div {
    width:300px;  
}

.aside {
    width: 100px;
    height: 150px;
    float: left;
    background: black;
}

.main {
    height:200px;
    background-color:red;
} 
<div class="aside" ></div>  
<div class="main" style="overflow: hidden;"></div>  
```

![](https://user-gold-cdn.xitu.io/2018/12/27/167ee3306b41e4f9?w=616&h=412&f=png&s=30755)

**每个元素的左边，与包含的盒子的左边相接触，即使存在浮动也是如此**

所以要想改变效果，使其互补干扰，就得利用 ``BFC`` 的区域不会与 ``float`` 重叠
```
// 让 <div class="main"> 也能触发BFC的性质
<div class="aside" ></div>  
<div class="main" style="overflow: hidden;"></div>  
```

**用处：比如常见的多栏布局，结合块级别元素浮动，里面的元素则是在一个相对隔离的环境里运行。**
## ``IFC``
内联格式化上下文，在 ``IFC`` 中，盒子水平放置，一个接着一个，从包含块的顶部开始。水平 ``margins``、``borders`` 和 ``padding`` 在这些盒子中被平分。这些盒子也许通过不同的方式进行对齐:他们的地步和顶部也许被对齐，或者通过文字的基线进行对齐。**矩形区域包含着来自一行的盒子叫做 ``line box``**
### 布局规则
* 框会从包含块的顶部开始，一个接一个地水平摆放
* ``line box`` 的宽度是 由包含块和存在的浮动来决定; ``line box`` 的高度由 ``line-height`` 来决定
* 摆放这些框时，它们在水平方向的 内外边距+边框 所占用的空间都会被考虑； 在垂直方向上，这些框可能会以不同形式来对齐： 水平的margin、padding、border有效，垂直无效。不能指定宽高


## ``GFC``
``GridLayout Formatting Contexts`` 网格布局格式化上下文
## ``FFC``
``Flex Formatting Contexts`` 自适应格式化上下文