const x = {
  val: 2
};
const x1 = () => x.val += 1;
const x2 = () => x.val *= 2;
// ...the order of the function calls is reversed...
x2();
x1();
// which changes the resulting value:
console.log(x.val); // 5
