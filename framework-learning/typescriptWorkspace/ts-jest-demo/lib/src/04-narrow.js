function paddingLeft(padding, input) {
    if (typeof padding === 'number') {
        return new Array(padding + 1).join(" ") + input;
    }
    // type guard，the padding type is string
    return padding + input;
}
function printAll(strs) {
    if (strs && typeof strs === 'object') {
        // null can be object
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
        return;
    }
    console.log(strs);
}
var x = Math.random() < 0.5 ? 10 : "hello world!"; // let x: string | number
function handleShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === 'square') {
        return Math.pow(shape.sideLength, 2);
    }
    else {
        // Type 'Triangle' is not assignable to type 'never'
        // const _exhaustiveCheck: never = shape;
        // const neverA: number = _exhaustiveCheck;
        // return _exhaustiveCheck;
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
var pet = {};
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
