// for loop
// while loop

// do-while loop

let i = 0;

// while (i > 0) {
//   console.log("Inside while");
//   console.log(i);
//   i++;
// }

// do {
//   console.log("Inside while");
//   console.log(i);
// } while (i > 0);

// Functions

// Declaration
// function greet(person) {
//   console.log(`Welcome to training ${person}. have a good day`); //concatenation
// }

// // Calling
// greet("Naresh");
// greet("Esvar");
// greet("Pavithra");

// function add(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// let n = 2;
// let m = 2;

// let total = add(n, m);
// console.log(`The sum of ${n} and ${m} is ${total}`);

// let firstName = "Naresh";
// let num = 10;

// // Length - 6
// // index - 0,1,2,3,4,5

// // firstName[1] = 's' // immutable

// console.log(firstName.length);

// console.log(firstName.at(0));
// console.log(firstName.charAt(0));
// console.log(firstName.charCodeAt(1));

// console.log(firstName.slice(1,4));
// console.log(firstName.substring(1, 4));

// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

// console.log(firstName.concat(' ','S'));
// console.log(firstName.trim());

// console.log(firstName.replace('N', 'n'));
// console.log(firstName.replaceAll('N', 'n'));

// let sentence = "This-is-a-sentence"

// console.log(sentence.split("-"));
// console.log(sentence.indexOf('s'));
// console.log(sentence.lastIndexOf('s'));

// console.log(sentence.includes('is'));
// console.log(sentence.startsWith('this'));
// console.log(sentence.endsWith('ew'));

// console.log('1'.repeat());

/* 
111
111
111

1
11
111

*/

// Array - list/collection of elements
const numbers = [10, 20, 30, 40, 50]; // Mutable

console.log(numbers);
numbers[0] = 100;
numbers[4] = 200;
numbers[6] = 300;
console.log(numbers);

console.log(numbers[0]);
console.log(numbers.length);
