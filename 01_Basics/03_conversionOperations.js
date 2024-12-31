let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*

"33" => 33
"33abc" => NaN
true => 1; false => 0
null => 0
undefined => NaN (Not a Number)

*/

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*

0 => false; 1 => true
"" => false; "abc..." => true
null => false; undefined => false

*/

let someNumber = 45

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

/*

45 => "45"
null => "null"
undefined => "undefined"
false => "false"; true => "true"

*/

// ******************* Operations **********************

let value = 3
let negValue = -value

// console.log(negValue);

// Arithmetic Operations in JS:
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power
// console.log(2/3);
// console.log(3%2);

// string concatenation
let str1 = "hello"
let str2 = "world"

let str3 = str1 + " " + str2
// console.log(str3);

// Some confusing examples:
// console.log("2" + 1);
// console.log(2 + "1");
// console.log("2" + 1 + 1);
// console.log(2 + 1 + "1");

// console.log((3 + 4) * (5/6) % 2); // Correct way to write codes

// Some more Research based study -
// (Convertions, But this method is not suugested)
// console.log(true);
// console.log(+true);
// console.log(+"");

// Link to Study : https://tc39.es/ecma262/#sec-type-conversion

// Prefix & Postfix Operations:

let x = 3;
const y = x++; 
// the increment operator increments and returns the value before incrementing.

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
// the increment operator increments and returns the value after incrementing.

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// ++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation

// Postfix Increment:
let x1 = 3;
const y1 = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

// Prefix Increment:
let a1 = 3;
const b1 = ++x;
// x is 4; y is 4

let a2 = 3n;
const b2 = ++x2;
// x2 is 4n; y2 is 4n

// Link to Study : 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment