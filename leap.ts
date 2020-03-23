class Leap {
    private first;
    private second;
    constructor(a: number, b: number) {
        this.first = a;
        this.second = b;
    }

    onLeap() {
        let result = this.first - this.second;
        return result
    }
}

let leap = new Leap(2022, 2020);
console.log(leap.onLeap())