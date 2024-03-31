//* ============================
//* Data Types Section - part 2
//* ============================

//* Concatenation in JavaScript

//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together.

//? It's important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.


// const str = "Hello " + "World";
// console.log(str);


//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//! It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

// let sum = "5" + 10;
// console.log(sum);

//?510

// let sum = "vinod" +5;
// console.log(sum)

// ?implicit coercion example

// let sum = "5" - 5;
// console.log(sum) 

//? --> 0





//* ============================
//* Tricky Interview Questions
//* ============================
console.log(10 + "20");
//!1020
console.log(9 - "5");
//! 4
console.log("Java" + "Script");
//! javaScript
console.log(" " + " ");
//! space
let sum = "1 " -0;
//! 0
console.log(typeof sum);
//! number
console.log("vinod" - "thapa");
//!NaN
console.log(true + true);
//! 2
console.log(true + false);
//! 1
console.log(false + true);
//! 1
console.log(false - true);
 //! -1
