// Primitive Datatypes
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(typeof anotherId); // => Symbol
// console.log(id === anotherId);

const bigNumber = 927489234923289429n

// ****************************************************************************************************************

// Reference Type/ Non Primitive Datatypes
// Array, Objects, Functions

const avengers = ["iron man", "captain america", "hulk", "hawkeye", "black widow", "thor"]; // array

let myObj = {
    name : "Aditya",
    age : 18,
} // object

const myFunction = function name(){
    console.log("Hello World");        
} // function

console.log(typeof bigNumber); // to tell tyoe of datatype of a variable
console.log(typeof myFunction); // => Function
console.log(typeof myObj); // => Object
console.log(typeof avengers); // => Object (Array)

//JavaScript is dynamically typed, which means that the type of a variable is assigned at runtime based on the value of the variable

// Link to Study: https://262.ecma-international.org/5.1/#sec-11.4.3