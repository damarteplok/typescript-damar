class Cencor {
    private str;
    private listStr: Array<string> = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum'];
    constructor(str: string) {
        this.str = str;
    }

    onCheck() {
        for (let i = 0; i < this.listStr.length; i++) {
            this.str = this.str.replace(this.listStr[i], 'XXX');   
        }
        return this.str;
    }
}

let cencor = new Cencor(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
console.log(cencor.onCheck())