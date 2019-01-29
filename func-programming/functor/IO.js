var _ = require('ramda');

var IO = function(f) {
    this.__value = f;
}

IO.of = function(x) {
    return new IO(function() {
        return x;
    });
}

IO.prototype.map = function(f) {
    return new IO(_.compose(f, this.__value))
}

var io_window = new IO(function() { return window });
io_window.map(function(win) {
    return win.innerWidth;
})