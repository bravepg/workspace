function draw(_a) {
    var shape = _a.shape, _b = _a.xPos, xPos = _b === void 0 ? 0 : _b, _c = _a.yPos, yPos = _c === void 0 ? 0 : _c;
    console.log(shape, xPos, yPos);
}
function draw1(_a) {
    var Shape = _a.shape, _b = _a.xPos, xPos = _b === void 0 ? 0 : _b, _c = _a.yPos, yPos = _c === void 0 ? 0 : _c;
    // Cannot find name 'shape'. Did you mean 'Shape'?
    // 注意结构赋值的语法
    // console.log(shape, xPos, yPos);
}
function doReadOnlySomething(obj) {
    // We can read from 'obj.prop'.
    console.log("prop has the value '" + obj.prop + "'.");
    // But we can't re-assign it.
    // obj.prop = "hello";
}
var writablePerson = {
    name: "Person McPersonface",
    age: 42,
};
// works
var readonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
var cc = {
    color: "red",
    radius: 42,
};
function setContent(box, newContent) {
    box.contents = newContent;
}
function ObjectDoSomething(value) {
    // ...
}
var myArray = ["hello", "world"];
