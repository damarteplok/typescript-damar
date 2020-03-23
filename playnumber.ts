class PlayNumber {
    private lists: Array<number> = new Array();
    constructor() {
        for (let i = 0; i <= 1000; i++) {
            this.lists.push(i);
        }
    }

    onEven() {
        let result = this.lists.filter( (x) => {
            if(x % 2 == 0) {
                return x
            }
        })
        return result;
    }
    
    onOdd() {
        let result = this.lists.filter( (x) => {
            if(x % 2 != 0) {
                return x
            }
        })
        return result;
    }

    onMultiple(val: number) {
        let result = this.lists.filter( (x) => {
            if(x % val == 0) {
                return x
            }
        })
        return result;
    }

    onPrime() {
        let result = this.lists.filter( (x) => {
            let i, flag = true; 
            for(i = 2; i <= x - 1; i++) {
                if (x % i == 0) { 
                    flag = false; 
                    break; 
                }
                if (flag == true) {
                    return x
                }
            }   
        })

        return result;   
    }

    onPrime100() {
        let result = this.lists.filter( (x) => {
            let i, flag = true; 
            for(i = 2; i <= x - 1; i++) {
                if (x % i == 0) { 
                    flag = false; 
                    break; 
                }
                if (flag == true) {
                    if(x < 100) {
                        return x
                    }
                }
            }   
        })

        return result;   
    }
}

let playnumber = new PlayNumber();
console.log('Even', playnumber.onEven())
console.log('Odd', playnumber.onOdd())
console.log('Multiple', playnumber.onMultiple(5))
console.log('Prime', playnumber.onPrime())
console.log('Prime < 100', playnumber.onPrime100())