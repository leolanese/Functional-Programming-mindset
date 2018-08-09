// shared-state: 2 -> 4 -> 5
const x = {
  val: 2
};
const x1 = () => x.val += 1;
const x2 = () => x.val *= 2;
// ...the order of the function calls is reversed...
x2(); // 2 * 2 = 4
x1(); // 4 + 1 = 5
// which changes the resulting value:
console.log(x.val); // 5
