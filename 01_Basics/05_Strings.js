const name = "Aditya"
const repoCount = 1

// console.log(name + repoCount + " Value");  --> Not a good method to concatenate strings

console.log(`Hello my name is ${name} and my repo count is ${repoCount}. Thankyou!`);
// This is the mordernized way of concatinating strings (` `) using Backticks.
// ${} --> is called a Placeholder.


//String Methods --

const gameName = new String('Aditya-am-com');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));
console.log(gameName.indexOf('a'));
// If there are multiple same characters in a string 
// it will show only the index where the character appeared for the first time

const subString = gameName.substring(0,4); // end index is not included
console.log(subString);

const sliceString = gameName.slice(-7,4); // cannot use (-ve) values in  substring method
console.log(sliceString);

const trimmedString = "    Trim Me     "
console.log(trimmedString);
console.log(trimmedString.trim()); // Strips Whitespaces(white spaces and line terminators) from the orignal string

const url = "htpps://aditya.com/aditya%20mukherjee"
console.log(url.replace("%20", "-"));

console.log(url.includes('aditya'));
console.log(url.includes('cookies'));

console.log(gameName.split('-')); // convert a string into array based on a separator.
// More to study about split method : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
