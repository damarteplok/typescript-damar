var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.onLower = function (str) {
        return str.toLowerCase();
    };
    Main.prototype.onUpper = function (str) {
        return str.toUpperCase();
    };
    Main.prototype.onCap = function (str) {
        var tempArray = str.split(' ');
        var result = [];
        var tempStr = '';
        for (var i = 0; i < tempArray.length; i++) {
            tempStr = tempArray[i];
            var asd = tempStr[0].toUpperCase() + tempStr.slice(1);
            result.push(asd);
        }
        return result.toString();
    };
    Main.prototype.onReverse = function (str) {
        var reverseStr = str.split('').reverse().join('');
        return reverseStr;
    };
    Main.prototype.onContain = function (str, str2) {
        var result = str.split(' ').includes(str2);
        return result;
    };
    return Main;
}());
var main = new Main();
console.log(main.onLower('MAKAN'));
console.log(main.onUpper('makan'));
console.log(main.onCap('saya ingin makan'));
console.log(main.onReverse('kasur'));
console.log(main.onContain('Saya ingin makan sate', 'makan'));
