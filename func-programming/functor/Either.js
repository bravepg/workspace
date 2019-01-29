var _ = require('ramda');

var Left = function(x) {
    this.__value = x;
}

Left.of = function(x) {
    return new Left(x);
}

Left.prototype.map = function(f) {
    return this;
}

var Right = function(x) {
    this.__value = x;
}

Right.of = function(x) {
    return new Right(x);
}

Right.prototype.map = function(f) {
    return Right.of(f(this.__value));
}

console.log(Right.of({ host: 'localhost' }).map(_.prop('host')));
console.log(Left.of({ host: 'localhost' }).map(_.prop('host')));