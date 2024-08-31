let num = 6;

let mark = 90;

// 1 condition
// if(num % 2 === 0){
//     console.log("Even");
// }
// else{
//     console.log("odd");
// }

// Ternary Operator
// (num % 2 === 0) ? console.log("Even") : console.log("odd");

// below 35 - fail
// 35 above - pass
// above 80 - first class

// if(mark < 35){
//     console.log("Fail");
// }
// else if(mark > 60 && mark < 80){ // true && false
//     console.log("second class");
// }
// else if(mark > 80){
//     console.log("First class");
// }
// else{
//     console.log("pass");
// }

// console.log("out of conditional statements");

// let day = 10;

// // === -> both value and type

// switch (day) {
//   case 10:
//     console.log("Monday");
//     break;

//   case "Tuesday":
//     console.log("Tuesday");
//     break;

//   case "Wednesday":
//     console.log("Wednesday");
//     break;

//   case "Thursday":
//     console.log("Thursday");
//     break;

//   case "Friday":
//     console.log("Friday");
//     break;

//   case "Saturday":
//     console.log("Saturday");
//     break;

//   case "Sunday":
//     console.log("Sunday");
//     break;

//   default:
//     console.log("Your value is wrong");
// }

// console.log("Out of the switch case");

// Looping

// initialization, condition, increment/ decrement

// let i;

// for (i = 5; i > 0; i++) {
//   console.log(i);
// }

// console.log("outside the loop");
// console.log(i);

// 1st loop -> i = 5 -> true
// 2nd loop -> i = 4 -> true
// 3rd loop -> i = 3 -> true
// 4th loop -> i = 2 -> true
// 5th loop -> i = 1 -> true
// 6th loop -> i = 0 -> false
// 7th loop -> i = -6 -> false

let i = 10803;
let sum = 0;

while (i > 0) {
  let digit = i % 10; 
  //sum += digit
  sum = sum + digit

  i = Math.floor(i / 10);
}

console.log(sum);

// 3
// 0
// 8
// 0
// 1

// 3
// 10803 / 10 = 1080.3 => 1080

// 0
// 1080 / 10 = 108 => 108

// 8
// 108 / 10 = 10.8 => 10

// 0
// 10 / 10 = 1 => 1

// 1
// 1 / 10 = 0.1 => 0