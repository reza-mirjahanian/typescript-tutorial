// Function overloading in TypeScript doesn't come with any runtime overhead. It just
// allows you to document the manner you expect the function to be called in and the
// compiler holds the rest of your code in check.
type myReturn = {
  top: number,
  right: number | undefined,
  bottom: number | undefined,
  left: number | undefined,
};

function padding(all: number): myReturn;

function padding(topAndBottom: number, leftAndRight: number): myReturn;

function padding(top: number, right: number, bottom: number, left: number): myReturn;
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b ? : number, c ? : number, d ? : number): myReturn {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}
padding(1); // Okay: all
const test = padding(1, 1); // Okay: topAndBottom, leftAndRight
padding(1, 1, 1, 1); // Okay: top, right, bottom, left
// padding(1,1,1); // Error: Not a part of the available overload

console.log({test})
