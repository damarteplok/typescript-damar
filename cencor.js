var Cencor = /** @class */ (function () {
    function Cencor(str) {
        this.listStr = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum'];
        this.str = str;
    }
    Cencor.prototype.onCheck = function () {
        for (var i = 0; i < this.listStr.length; i++) {
            this.str = this.str.replace(this.listStr[i], 'XXX');
        }
        return this.str;
    };
    return Cencor;
}());
var cencor = new Cencor("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
console.log(cencor.onCheck());
