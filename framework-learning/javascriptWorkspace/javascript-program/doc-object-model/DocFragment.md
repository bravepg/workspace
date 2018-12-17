``DocumentFragment``节点代表一个文档的片段，本身就是一个完整的 ``DOM`` 树形结构。它没有父节点，``parentNode``返回``null``，但是可以插入任意数量的子节点。它不属于当前文档，**操作``DocumentFragment``节点，要比直接操作 ``DOM`` 树快得多。**

常用场景

反转一个指定节点的所有子节点的顺序
```
function reverse(n) {
    var f = document.createDocumentFragment();
    while(n.lastChild) f.appendChild(n.lastChild);
    n.appendChild(f);
}
```