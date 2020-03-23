var Leap = /** @class */ (function () {
    function Leap(a, b) {
        this.first = a;
        this.second = b;
    }
    Leap.prototype.onLeap = function () {
        var result = this.first - this.second;
        return result;
    };
    return Leap;
}());
var leap = new Leap(2022, 2020);
console.log(leap.onLeap());
