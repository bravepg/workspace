var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function capitalizeFirstLetter(str) {
    return "" + str.charAt(0).toUpperCase() + str.slice(1);
}
function observable(target, key) {
    var targetKey = "on" + capitalizeFirstLetter(key) + "Change";
    console.log('arguments', target, key);
    target[targetKey] = function (fn) {
        var prev = this[key];
        Reflect.defineProperty(this, key, {
            set: function (next) {
                fn(prev, next);
                prev = next;
            }
        });
    };
}
var PropertyC = /** @class */ (function () {
    function PropertyC() {
        this.foo = -1;
        this.bar = 'bar';
    }
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], PropertyC.prototype, "foo", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], PropertyC.prototype, "bar", void 0);
    return PropertyC;
}());
var propertyC = new PropertyC();
console.log('propertyC', propertyC);
// propertyC.onFooChange((prev: any, next: any) => console.log(`prev: ${prev}, next: ${next}`))
// propertyC.onBarChange((prev: any, next: any) => console.log(`prev: ${prev}, next: ${next}`))
// propertyC.foo = 100; // -> prev: -1, next: 100
// propertyC.foo = -3.14; // -> prev: 100, next: -3.14
// propertyC.bar = "baz"; // -> prev: bar, next: baz
// propertyC.bar = "sing"; // -> prev: baz, next: sing
