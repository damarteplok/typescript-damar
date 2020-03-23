class Palindrome {
    private str;
    constructor(str: string) {
        this.str = str;
    }

    onCheck() {
        let re = /[\W_]/g;
        let lowRegStr = this.str.toLowerCase().replace(re, '');
        let reverseStr = lowRegStr.split('').reverse().join(''); 
        return reverseStr === lowRegStr;
    }
}

let as = new Palindrome('ibu ratna antar ubi');
console.log(as.onCheck())