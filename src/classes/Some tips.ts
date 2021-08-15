// Type Assertion vs. Casting
interface Foo {
    bar: number;
    bas: string;
}
var foo1 = {} as Foo;

var foo2 = <Foo>{};

// Double assertion
function handler(event: Event) {
    let element = event as any as HTMLElement; // Okay!
}

// User Defined Type Guard!
function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
}
