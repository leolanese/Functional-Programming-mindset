const x = {
  val: 2
};
const x1 = () => x.val += 1;
const x2 = () => x.val *= 2;
x1();
x2();
console.log(x.val); // 6
