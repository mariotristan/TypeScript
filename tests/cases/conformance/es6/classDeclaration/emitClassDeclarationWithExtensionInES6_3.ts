// @target: es6
class C {
    x: string = "hi";
    constructor(t: string) {
    }
}

class D extends C {
    y: number = 10;
    constructor() {
        super("WORLD");
    }
}