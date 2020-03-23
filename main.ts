class Main {
    constructor() {
    }

    onLower(str: string) {
        return str.toLowerCase();
    }

    onUpper(str: string) {
        return str.toUpperCase();
    }

    onCap(str: string) {
        let tempArray = str.split(' ');
        let result = [];
        let tempStr = '';
        for (let i = 0; i < tempArray.length; i++) {
          tempStr = tempArray[i];
          let asd = tempStr[0].toUpperCase() + tempStr.slice(1);
          result.push(asd);
        }

        return result.toString();
    }

    onReverse(str: string) {
        let reverseStr = str.split('').reverse().join('');
        return reverseStr;
    }

    onContain(str,str2) {
        let result = str.split(' ').includes(str2);
        return result;
    }
    //males yang lainnya
}

let main = new Main();
console.log(main.onLower('MAKAN'))
console.log(main.onUpper('makan'))
console.log(main.onCap('saya ingin makan'))
console.log(main.onReverse('kasur'))
console.log(main.onContain('Saya ingin makan sate', 'makan'))