/// <reference path='fourslash.ts' />

////let A = class Foo {
////    [|private|] foo;
////    [|private|] private;
////    constructor([|private|] y: string, public x: string) {
////    }
////    [|private|] method() { }
////    public method2() { }
////    [|private|] static static() { }
////}
////
////let B = class D {
////    constructor(private x: number) {
////    }
////    private test() {}
////    public test2() {}
////}

const ranges = test.ranges();
for (let r of ranges) {
    goTo.position(r.start);

    for (let range of ranges) {
        verify.occurrencesAtPositionContains(range, false);
    }
}
