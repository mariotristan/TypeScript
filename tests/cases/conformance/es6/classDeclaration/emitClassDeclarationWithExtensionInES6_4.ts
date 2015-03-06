// @target: es6
class C {
    x: string = "hi";
    constructor(t: string, ...args:any[]) {
    }
}

class D extends C {
    y: number = 10;
    constructor() {
        super("World", 1, 23);
    }
}