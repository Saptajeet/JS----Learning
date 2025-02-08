const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

// Number Methods --

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-US'));
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// There are many more methods associated to number datatype

//************************************Maths********************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.sqrt(9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

// Other functions in Math: 

// ƒ abs()
// ƒ acos()
// ƒ acosh()
// ƒ asin()
// ƒ asinh()
// ƒ atan()
// ƒ atan2()
// ƒ atanh()
// ƒ cbrt() 
// ƒ ceil()
// ƒ clz32()
// ƒ cos()
// f cosh()
// ƒ exp()
// ƒ expm1()
// ƒ floor()
// ƒ fround()
// ƒ hypot()
// ƒ imul()
// ƒ log()
// ƒ log1p()
// f log2()
// ƒ log10()
// ƒ max()
// ƒ min()
// ƒ pow()
// ƒ random()
// ƒ round()
// ƒ sign()
// ƒ sin()
// ƒ sinh()
// ƒ sqrt()
// ƒ tan()
// ƒ tanh()
// ƒ trunc()


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min);

// This can be modified according to users requirements.