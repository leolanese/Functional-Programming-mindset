// yes we can create functions as many other languages
function foo(n){ return n + 1}

// BUT JS also allow us to create an anonimous function AND assign it to a variable
let HoF = function(n){ return n + 1};

// and then pass the function as a variable
var HoF2 = HoF;
HoF(2); // 3 :)
