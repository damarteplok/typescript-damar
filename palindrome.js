var Palindrome = /** @class */ (function () {
    function Palindrome(str) {
        this.str = str;
    }
    Palindrome.prototype.onCheck = function () {
        var re = /[\W_]/g;
        var lowRegStr = this.str.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join('');
        return reverseStr === lowRegStr;
    };
    return Palindrome;
}());
var as = new Palindrome('ibu ratna antar ubi');
console.log(as.onCheck());
