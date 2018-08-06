// not pure
// impure: because it reads/modifies an external variable, counter, which isn’t local to the function’s scope.
const y = 2
function adder (x){
  return x + y
}
