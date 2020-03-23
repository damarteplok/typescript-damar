class Combine {
    private first;
    private second;
    private third;
    constructor(a: any, b: any, c: any) {
        this.first = a;
        this.second = b;
        this.third = c;
    }

    onCombine() {
        let all = [...this.first, ...this.second, ...this.third];
        return all;
    }
}

const asd = ['Behind', 'every', 'great', 'man']
const asd1 = ['is', 'a', 'woman']
const asd2 = ['rolling', 'her', 'eyes']

let combine = new Combine(asd, asd1, asd2);
console.log(combine.onCombine())