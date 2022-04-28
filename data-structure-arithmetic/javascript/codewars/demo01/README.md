观察如下规律, 写一个函数 `accum`
```
accum("abcd");      // "A-Bb-Ccc-Dddd"
accum("helloWorld");   // "H-Ee-Lll-Llll-Ooooo-Wwwwww-Ooooooo-Rrrrrrrr-Lllllllll-Dddddddddd"
accum("China");      // "C-Hh-Iii-Nnnn-Aaaaa"
```
### 思路1
最简单的字符串拼接
### 思路2
利用正则
### 思路3
利用 ``reduce``，它的存在的使用场景是归并：把多个东西聚合为一个