> "OOP vs FP: Don't be an FP programmer, don't be an OOP programmer... BE A BETTER PROGRAMMER."
> ~ @fernando_cejas

# Thinking Functionally, the mindset game:

## Steps to get the right mindset into Functional Programming

### **Separate the pure from the impure**
If a function is impure, if posible, split it and simple as creating two functions

***

### **Don't change objects in functions**

```javascript runnable
// IMPURE MUTATED :(
const minimum = {
  usa: { old: 16 },
  spain: 21,
  uk: 19
}

function save(object){
    object.saved = true; // don’t
    return object;
}
```

```javascript runnable
// Better do:
// PURE
const minimum = {
  usa: { old: 16 },
  spain: 21,
  uk: 19
}

// Write functions that return altered copies instead of changing properties of the given object.
function save(object){
    let newObject = {...object, newProp: true}; // clone it first :)
    return newObject;
}
// new object changed
JSON.stringify(save(minimum)) // "{"usa":{"old":16},"spain":21,"uk":19,"newProp":true}"

// original object NOT changed
JSON.stringify(minimum); // "{"usa":{"old":16},"spain":21,"uk":19}"
```

***

### **Better or no ifs. Expressions instead of Statements**

#### Use if/else ternary operator

```javascript runnable
// old style
// Statement
const getSalutation = function(hour) {
    var salutation; // temp value
    if (hour < 12) {
      salutation = "Good Morning";
    }
    else {
      salutation = "Good Afternoon"
    }
    return salutation; // mutated value
  } 
```

```javascript runnable
// Better do:
// Expression
const getSalutation = (hour) => hour < 12 ? "Good Morning" : "Good Afternoon";

console.log(getSalutation(10)); // Good Morning
```

#### Avoid Nested ifs/complex || conditions

```javascript runnable
// old style
var myvar = 1;
if( myvar==1 || myvar==5 || myvar==7 || myvar==22 ) { true }; // true
```

```javascript runnable
// better but not great :/
const myvar =1;
[1,5,7,22].indexOf(myvar)!== -1; // true
```

```javascript runnable
// Better do:
// a modern approach
const myvar =1;
[1,5,7,22].includes(myvar); // true
```

### Better ifs, no ifs. Use functions

```javascript runnable
// old school 
var color = 'red'

if (color) {
  if (color === 'black') {
    console.log('black');
  } else if (color === 'red') {
    console.log('red');
  } else if (color === 'blue') {
    console.log('blue');
  } else if (color === 'green') {
    console.log('green');
  } else {
    console.log('yellow');
  }
}
```

```javascript runnable
// Better do:
const red = function(){ return 'red' };
const blue = function(){ return 'blue' };
const yellow = function(){ return 'yellow' };

function getColor(type) {
  let colors = {
    'red': red,
    'blue': blue,
    'yellow': yellow,
    'default': function() {
      return 'Another color';
    }
  };
  return (colors[type] || colors['default'])();
}

getColor('red'); // red
```

***

### **Use ES6 Arrow Functions (fat arrow)**

```javascript runnable
// old style
var multiply = function(x,y) {
  return x * y;
}
console.log(multiply(2,10)); //20
```

```javascript runnable
// Better do:
// ES6 new style
const multiply = (x, y) => x * y;
console.log(multiply(2,10)); //20
```

Further Information:
[ES6 Arrow functions](https://github.com/leolanese/ES6_workshop/blob/master/2.2-Arrow%20functions.md") create a concise expression that encapsulates a small piece of functionality. Additionally, arrows retain the scope of the caller inside the function eliminating the need of self = this.

***

### **Avoid loops and iteration**
<p>A loop is an imperative control structure that is hard to reuse and difficult to plug in to other operations. 
We can use Recursion,.map(), .reduce(), .filter(), etc </p>

```javascript runnable
// Old style
// take an array of Object just get an specific key(s)
// Using old imperative programming
var ao = [{
        "name": "Zak",
        "age": 25
    },{
        "name": "Adel",
        "age": 38
    },{
        "name": "Yori",
        "age": 28
    }
];
for (var i = 0, arr = []; i < ao.length; i++) {
  arr.push(ao[i].name); // mutation sucks :(
};  
console.log(arr); // ["Zak", "Adel", "Yori"]

```

```javascript runnable
// better: using FP, avoid loops
const x = (x) => x.name; // minimizing moving parts
[{
        "name": "Zak",
        "age": 25
    },{
        "name": "Adel",
        "age": 38
    },{
        "name": "Yori",
        "age": 28
    }
].map(x); // ["Zak", "Adel", "Yori"]
```


```javascript runnable
// Using .some to break a loop
const isBiggerThan10 = numb => numb > 10;
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

```javascript runnable
// Using .every to break a loop
const isSmallerThan10 = num => num < 10;
console.log([2, 5, 8, 1, 4].every(isSmallerThan10));  // true
console.log([12, 5, 8, 1, 4].every(isSmallerThan10)); // false
```

Tip:
Think about results over steps. Next time you are about to iterate something, stop, and think about: 
"How this can look if I don't iterate this?" [Loops & Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration "Loops & Iteration")

***

### **Use array manipulation functions & Avoid mutator methods**


**DO NOT** use the mutator methods, these methods modify the array:
.push(), .copyWith(), .fill(), .pop(), .reverse(), .shift(), .sort(), .splice(), .unshift()

**Better USE** non-mutating methods (Accessor methods, Iteration methods ):
.concat(), .join(), .slice(), .toString(), .reduce(), .reduceRight(), etc.

### Full list:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Mutator_methods Mutator_method">Mutator_method</a>

***

### **Use Higher-order-Function (HoF) & Spread Operator when possible**

```javascript runnable
let jsonData = [
  { id: 1, name: "Soda", price: 2.40, cost: 1.04, size: "4cl", },
  { id: 2, name: "Beer", price: 6.00, cost: 2.45, size: "8cl" },
  { id: 3, name: "Margarita", price: 10, cost: 4.45, size: "12cl" }
];

// ...x (spread operator) ensures that we copy the complete object and its properties, while only modifying the price value. 
const objAndProperties = jsonData
                        .map(x => ({...x, price: (x.price / 2).toFixed(1) }));

console.log(JSON.stringify(objAndProperties)); // [{"id":1,"name":"Soda","price":"1.2","cost":1.04,"size":"4cl"},{"id":2,"name":"Beer","price":"3.0","cost":2.45,"size":"8cl"},{"id":3,"name":"Margarita","price":"5.0","cost":4.45,"size":"12cl"}]                   
```

```javascript runnable
// 
var arrOfObj = [
  { "name": "Sam", "age": 1 },
  { "name": "Tom", "age": 2},
  { "name": "Carley","age": 35}
];

// this is so 2014 - ES4.1 
var arrToFilter = [];
for (var i=0; i < arrOfObj.length; i++){
  arrToFilter.push(arrOfObj[i].name);
}
console.log(arrOfObj)

// better ES6 style & using .map()
let arrToFilter = arrOfObj.map(arr => arr.name);

```

***

### **Use Method Chaining**
Method chains allow a series of functions to operate in succession to reach a final result. Method chains allow 
function composition similar to a pipeline.

```javascript runnable
let cart = [{name: "Drink", price: 3.12}, 
            {name: "Steak", price: 45.15}, 
            { name: "Drink", price: 11.01}];
let drinkTotal = cart.filter(x=> x.name === "Drink")
                     .map(x=> x.price)
                     .reduce((t,v) => t +=v)
                     .toFixed(2); 
console.log('Total Drink Cost', drinkTotal ); // Total Drink Cost $14.13
```

***

### **Use pipelines**
A pipeline allows for easy function composition when performing multiple operations on a variable. Since 
JavaScript lacks a Pipeline operator, a design pattern can be used to accomplish the task.

```javascript runnable
const pipe = functions => data => {
  return functions.reduce(
    (value, func) => func(value),
    data
  );
};

let cart = [3.12, 45.15, 11.01];
const addSalesTax = (total, taxRate) => (total * taxRate) + total;

const tally = orders => pipe([
  x => x.reduce((total, val) => total + val), // sum the order
  x => addSalesTax(x, 0.09),
  x => `Order Total = ${x.toFixed(2)}` // convert to text
])(orders); // Order Total = 64.62
```

***


### **Dependency injection**
Dependency injection works by moving the impure parts of the code out of the function. 
So you have to pass them in as parameters. 

```javascript runnable
// Here we are using: 
// new Date()).toISOString() = IMPURE
// console.log(); = IMPURE

const d = {toISOString: () => '1865-11-26T16:00:00.000Z'};
// IMPURE 
function logSomething(foo) {
    const dt = (new Date()).toISOString(); // Date is impure
    console.log(`${dt}: ${foo}`); // IO log is impure
    return foo;
}

logSomething('Date is impure! & IO log is impure :(');
```

```javascript runnable
// make it pure using dependency injection:
// take any impurities and make them a function parameter now we'll have 3 params:
function logSomething(d, cnsl, foo) {
    const dt = d.toISOString();
    cnsl.log(`${dt}: ${foo}`);
    return foo;
}

// then we call it with the impure parts
const foo = "make it pure using dependency injection!"
const d = new Date();
logSomething(d, console, foo);
// so yes! If you call it with those same parameters, it will return the same thing every single time.
// and no external contact = pure.
// That's the trick :) 
```

***

<p>sum all values of the Array</p>

```javascript runnable
// forEach not nice :(
// forEach() is still a loop
const values = [1, 2, 3, 3, 5];
let sum = 0;
values.forEach( v => { sum += v; } ); // forEach() is still a loop
console.log( sum ); // 14
```

```javascript runnable
// Better do:
// getting rid of loops
const values = [1, 2, 3, 3, 5];
const sum = values.reduce( (acum, v) => {
    const result = acum + v;
    return result;
}, 0 );
console.log( sum ); // 14
```

Further information:
<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">Array.prototype.reduce()</a>

***

<p>Get cats younger than 7 months</p>

```javascript runnable
const cats = [
  { name: 'Mojo',    months: 84 },
  { name: 'Mao-Mao', months: 34 },
  { name: 'Waffles', months: 4 },
  { name: 'Pickles', months: 6 }
]
var kittens = []
// old `for loop` :(
for (let i = 0; i < cats.length; i++) {
  if (cats[i].months < 7) {
    kittens.push(cats[i].name)
  }
}

console.log(kittens); // ["Waffles", "Pickles"]
```

```javascript runnable
// better do :)
const cats = [
  { name: 'Mojo',    months: 84 },
  { name: 'Mao-Mao', months: 34 },
  { name: 'Waffles', months: 4 },
  { name: 'Pickles', months: 6 }
]

const isKitten = cat => cat.months < 7; // check reusability moving parts! 
const getName = cat => cat.name; // sexy code :)

const getKittenNames = cats => cats
      .filter(isKitten)
      .map(getName)
const kittens = getKittenNames(cats);

console.log(kittens); // ["Waffles", "Pickles"]
```

Further Information:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Array.prototype.filter()</a>

***

### **Lazy functions**
Controlling the side-effect: **A side effect isn’t a side effect until it actually happens.**

```javascript runnable
// fZero() is impure
function fZero() { 
    console.log('IMPURE'); // IO log = Impure
    return 0;
}
```

```javascript runnable
// NOW returnZeroFunc() is pure, the function does nothing other than return the same fZero function, every time.
function returnZeroFunc() {
    function fZero() {  // we wrapped fZero() inside another function that just returned it right?
        console.log('IMPURE');
        return 0;
    }
    return fZero;
}
// This function wrapping thing is a legitimate strategy.
// We can keep hiding behind functions as long as we want. Oh yes!
// And as long as we never actually call any of these functions, they’re all theoretically pure. 
// So, we control the side-effect:
// Wrapping everything in a function lets us control those effects with precision. 
// We decide exactly when those side effects happen. 
const zeroFunc1 = returnZeroFunc(); // pure
```

***

### **Variable Assignment**

```javascript runnablel
function doubleAndAddTen(x) {
    const doubled = x * 2;
    return doubled + 10;
}
```

```javascript runnable
// The doubled binding is now a function parameter, which doesn't modify the local scope for doubleAndAddTen.
function doubleAndAddTen(x) {
    return (doubled => doubled + 10)(x * 2);
}
```

***

### **Sequenced Side Effects**

```
// Impure
console.log('One');
console.log('Two');
```

```
function pureLog(msg) {
    return () => console.log(msg);
}

const sideEffectSequence = (firstEffect, secondEffect) =>
    () => (ignoredReturnValue => secondEffect())(firstEffect());

const sequencedSideEffect = sideEffectSequence(pureLog('One'), pureLog('Two'));

sequencedSideEffect(); // One, Two
```

***

### **Avoid impure methods**

**Date (Date.now)**, **Math.random** (since it always produces a new value no matter what the inputs are), console.log(), this, global variables, exceptions thrown, etc. In fact, because JavaScript passes object references around, every function that takes an object or array is potentially subject to impurity. 

*** 

### **Bend your language to the problem, not the problem to the language**

The most obvios tip is: Please, take advantage of all the language features, if you have something that it is already done, well: use it. **Do not spend time working on languague problem, focus on bussiness goal issues.**

***





