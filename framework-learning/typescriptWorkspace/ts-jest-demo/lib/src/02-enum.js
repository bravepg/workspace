// 数字枚举
var NumberDirection;
(function (NumberDirection) {
    NumberDirection[NumberDirection["Up"] = 1] = "Up";
    NumberDirection[NumberDirection["Down"] = 2] = "Down";
    NumberDirection[NumberDirection["Left"] = 3] = "Left";
    NumberDirection[NumberDirection["Right"] = 4] = "Right";
})(NumberDirection || (NumberDirection = {}));
// 字符串枚举的每个成员必须使用字符串字面量或者另外一个字符串枚举成员进行初始化
var StringDirection;
(function (StringDirection) {
    StringDirection[StringDirection["UpNum"] = 0] = "UpNum";
    StringDirection["Up"] = "Up";
    StringDirection["Down"] = "Down";
    StringDirection["Left"] = "Left";
    StringDirection["Right"] = "Right";
})(StringDirection || (StringDirection = {}));
function getSomeValue() {
    return 2;
}
// 异构枚举
var StringNumberEnum;
(function (StringNumberEnum) {
    StringNumberEnum["No"] = "false";
    StringNumberEnum[StringNumberEnum["Yes"] = 1] = "Yes";
    // Init = getSomeValue(), // 后续值必须显示初始化
})(StringNumberEnum || (StringNumberEnum = {}));
// 每个成员都具有一个值，可以是常量或者被计算出来
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
})(E1 || (E1 = {}));
;
var E2;
(function (E2) {
    E2[E2["A"] = 3] = "A";
    E2[E2["B"] = 4] = "B";
})(E2 || (E2 = {}));
;
var VALUE = 'ENUM_VALUE';
var FileAccess;
(function (FileAccess) {
    // const members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["A"] = 4] = "A";
    FileAccess["No"] = "false";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
    // Only numeric enums can have computed members
    // VALUE: VALUE
})(FileAccess || (FileAccess = {}));
console.log(E1.X, E2.B, DeclareEnum.A); // 0
