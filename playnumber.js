var PlayNumber = /** @class */ (function () {
    function PlayNumber() {
        this.lists = new Array();
        for (var i = 0; i <= 1000; i++) {
            this.lists.push(i);
        }
    }
    PlayNumber.prototype.onEven = function () {
        var result = this.lists.filter(function (x) {
            if (x % 2 == 0) {
                return x;
            }
        });
        return result;
    };
    PlayNumber.prototype.onOdd = function () {
        var result = this.lists.filter(function (x) {
            if (x % 2 != 0) {
                return x;
            }
        });
        return result;
    };
    PlayNumber.prototype.onMultiple = function (val) {
        var result = this.lists.filter(function (x) {
            if (x % val == 0) {
                return x;
            }
        });
        return result;
    };
    PlayNumber.prototype.onPrime = function () {
        var result = this.lists.filter(function (x) {
            var i, flag = true;
            for (i = 2; i <= x - 1; i++) {
                if (x % i == 0) {
                    flag = false;
                    break;
                }
                if (flag == true) {
                    return x;
                }
            }
        });
        return result;
    };
    PlayNumber.prototype.onPrime100 = function () {
        var result = this.lists.filter(function (x) {
            var i, flag = true;
            for (i = 2; i <= x - 1; i++) {
                if (x % i == 0) {
                    flag = false;
                    break;
                }
                if (flag == true) {
                    if (x < 100) {
                        return x;
                    }
                }
            }
        });
        return result;
    };
    return PlayNumber;
}());
var playnumber = new PlayNumber();
console.log('Even', playnumber.onEven());
console.log('Odd', playnumber.onOdd());
console.log('Multiple', playnumber.onMultiple(5));
console.log('Prime', playnumber.onPrime());
console.log('Prime < 100', playnumber.onPrime100());
