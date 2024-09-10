// Array - list/collection of elements
const numbers = [10, 20, 30, 40, 50]; // Mutable

console.log(numbers);
numbers[0] = 100;
numbers[4] = 200;
numbers[5] = 300;
console.log(numbers);

console.log(numbers[0]);
console.log(numbers.length);

numbers.push(1000);
numbers.push("String Element");

console.log(numbers);
console.log(numbers.at(2));

// 100 20 30 40 200 300 1000
let joinedStr = numbers.join(" ");
console.log(joinedStr);

let poppedElement = numbers.pop();
console.log(numbers);
console.log(poppedElement);

console.log(numbers.shift());
console.log(numbers);

console.log(numbers.unshift("First element"));
console.log(numbers);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

console.log(arr1.concat(arr2, arr3));

console.log(numbers.slice(1, 4));
console.log(numbers);

console.log(numbers.splice(1, 0, 200, 300));
console.log(numbers);

console.log(numbers.toString());

// Searching and Sorting
console.log(numbers.indexOf(200));
console.log(numbers.lastIndexOf(200));

console.log(numbers.includes(20, 4));

// const names = ["naresh", "esvar", "revathi", "pavithra"]

// console.log(names.sort());
console.log(numbers.reverse());
console.log(numbers);


// function main(num1, num2) {
    //     return num1 + num2;
    // }
    
    // // single line
    // const mainFunc = (num1, num2) => num1+num2;
    
    // console.log(mainFunc(1, 2));
    
// for(let i = 4; i<6;i++){
//     console.log(numbers[i]);
// }

numbers.forEach((num) => {
    if(num > 100){
        console.log(num);
    }
});

// for(let num of numbers){
//     console.log(num);
// }

const arr = [1,2,3,4,5]
// [10,20,30,40,50] - map example
// [2,4] - filter example

// const newArr = []
// arr.forEach((num) => {
//     newArr.push(num*10)
// })
// console.log(newArr);

const newArr = arr.map((num) => num*10)
console.log(newArr);

const evenArr = arr.filter((num) => num%2 === 0)
console.log(evenArr);

// accumulator
const sum = arr.reduce((total, num) => total + num)
console.log(sum);

// let arrSum = 0
// for (let i = 0; i < arr.length; i++) {
//     arrSum += arr[i];
// }
// console.log(arrSum);

const allEven = arr.every((num) => num%2 === 0)
console.log(allEven);

const someEven = arr.some((num) => num%2 === 0)
console.log(someEven);

console.log(arr);

let num1 = 10;
let num2 = num1;

num1++

console.log(num1);
console.log(num2);

const newNumbers = [...arr];
console.log(newNumbers);

arr[1] = 20;

console.log(`${arr}`);
console.log(newNumbers);

// Object - {} - key: value - unordered

const user = {
    name: "Naresh",
    role: "Developer",
    time: 6,
}

console.log(user);

user.email = "email";
user["password"] = "pass";

let skills = "MERN"

user["skills"] = skills

user.time = 7

console.log(user);

console.log(Object.values(user));
console.log(Object.entries(user));

// [['name','naresh'],['role','developer']]


//Object in
//array of

for(let property of Object.entries(user)){
    console.log(property);
}