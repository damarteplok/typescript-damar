class Count {
    private str;
    private listStr: Array<string> = ['aku', 'ingin', 'dapat'];
    constructor(str: string) {
        this.str = str;
    }

    onCheck() {
        let temp = this.str.split(' ');
        let tempaku = 0;
        let tempingin = 0;
        let tempdapat = 0;
        for (let i = 0; i < temp.length; i++) {
             if(temp[i].toLowerCase() == 'aku') {
                tempaku = tempaku + 1;
             }
             if(temp[i].toLowerCase() == 'ingin') {
                tempingin = tempingin + 1;
             }
             if(temp[i].toLowerCase() == 'dapat') {
                tempdapat = tempdapat + 1;
             }
        }
        return [tempaku, tempingin, tempdapat]
    }
}

let count = new Count(`Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali`);
console.log(count.onCheck())