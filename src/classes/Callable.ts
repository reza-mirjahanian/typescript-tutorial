interface GetName {
    () : string
}
 declare const foo: GetName ;
let testFoo = foo();

interface CallMeWithNewToGetString {
    new(): string
}
// Usage
declare const Foo: CallMeWithNewToGetString;
const bar = new Foo(); 

