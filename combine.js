var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Combine = /** @class */ (function () {
    function Combine(a, b, c) {
        this.first = a;
        this.second = b;
        this.third = c;
    }
    Combine.prototype.onCombine = function () {
        var all = __spreadArrays(this.first, this.second, this.third);
        return all;
    };
    return Combine;
}());
var asd = ['Behind', 'every', 'great', 'man'];
var asd1 = ['is', 'a', 'woman'];
var asd2 = ['rolling', 'her', 'eyes'];
var combine = new Combine(asd, asd1, asd2);
console.log(combine.onCombine());
