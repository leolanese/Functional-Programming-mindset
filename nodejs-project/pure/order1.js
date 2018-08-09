// shared-state: 2 -> 3 -> 6
const x = {
  val: 2 
};
const x1 = () => x.val += 1;
const x2 = () => x.val *= 2;
x1(); // 2 + 1 = 3
x2(); // 3 * 2 = 6 
console.log(x.val); // 6
