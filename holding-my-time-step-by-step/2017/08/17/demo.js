function changeStuff(a, b, c) {
    a = a * 10;
    b.item = "changed";
    c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);       //10
console.log(obj1.item); // changed   
console.log(obj2.item)  // unchanged