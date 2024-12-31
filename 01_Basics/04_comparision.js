// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log(2 = 1); // SyntaxError: Invalid left-hand side in assignment

console.log("2" > 1);
console.log("02" > 1); // Output is not always predectible
// It is reccomended to only compare values with same datatypes

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// The reason is that an equality check == and comparisons > < >= <= work differently
// Comparisons convert null to a number, treating it as 0
// That’s why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// === Stict Check (Checks values strictly i.e. it also checks datatypes)

console.log("2" === 2); // false

