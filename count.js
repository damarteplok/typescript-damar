var Count = /** @class */ (function () {
    function Count(str) {
        this.listStr = ['aku', 'ingin', 'dapat'];
        this.str = str;
    }
    Count.prototype.onCheck = function () {
        var temp = this.str.split(' ');
        var tempaku = 0;
        var tempingin = 0;
        var tempdapat = 0;
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].toLowerCase() == 'aku') {
                tempaku = tempaku + 1;
            }
            if (temp[i].toLowerCase() == 'ingin') {
                tempingin = tempingin + 1;
            }
            if (temp[i].toLowerCase() == 'dapat') {
                tempdapat = tempdapat + 1;
            }
        }
        return [tempaku, tempingin, tempdapat];
    };
    return Count;
}());
var count = new Count("Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali");
console.log(count.onCheck());
