// Array - list/collection of elements
const numbers = [10, 20, 30, 40, 50]; // Mutable

console.log(numbers);
numbers[0] = 100;
numbers[4] = 200;
numbers[5] = 300;
console.log(numbers);

console.log(numbers[0]);
console.log(numbers.length)


numbers.push(1000)
numbers.push("String Element")



console.log(numbers);
console.log(numbers.at(2));

// 100 20 30 40 200 300 1000
let joinedStr = numbers.join(" ")
console.log(joinedStr);

let poppedElement = numbers.pop()
console.log(numbers);
console.log(poppedElement);

console.log(numbers.shift())
console.log(numbers);

console.log(numbers.unshift("First element"))
console.log(numbers);

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [7,8,9]

console.log(arr1.concat(arr2, arr3));

console.log(numbers.slice(1,4));
console.log(numbers);

console.log(numbers.splice(1,0, 200, 300));
console.log(numbers);

console.log(numbers.toString());