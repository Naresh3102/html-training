// const arr = [1, 3, 7, 0, 5];

// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i] > max) {
//     max = arr[i]
//   }
// }

// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i] < min) {
//     min = arr[i]
//   }
// }

// console.log(max);
// console.log(min);

// Constructor Function

// function Person(name, city, gender) {
//   this.firstName = name;
//   this.city = city;
//   this.gender = gender;
// }

// Person.prototype.time = "time";

// Person.prototype.introduce = function () {
//   return `Hello, my name is ${this.firstName} and my location is ${this.city}`;
// };

class Person {
  #password;

  constructor(name, city, gender, password) {
    this.firstName = name;
    this.city = city;
    this.gender = gender;
    this.#password = password;
  }

  setFirstName(name) {
    this.firstName = name;
  }

  getFirstName() {
    return this.firstName;
  }

  introduce() {
    return `Hello, my name is ${this.firstName} and my location is ${this.city}`;
  }

  login(name, password) {
    if (this.firstName === name && this.#password === password) {
      console.log("Logged in");
    } else {
      console.log("Invalid credentials");
    }
  }
}

Person.prototype.time = "time";

// console.log(Person);

const Person1 = new Person("Naresh", "Erode", "male", "Naresh@123");
const Person2 = new Person("Akash", "Trichy");

// console.log(Person1);
// console.log(Person1.firstName);
// console.log(Person1.city);
// console.log(Person1.time);
// Person1.setFirstName("naresh");
// console.log(Person1.introduce());

// console.log(Person2);
// console.log(Person2.firstName);
// console.log(Person2.city);
// Person2.introduce();

// // new Array()
// const arr = [1, 2, 3];

// console.log(arr);

// Person1.login("Naresh", "Naresh@123")

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  introduce() {
    console.log(`I am ${this.name}.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

class Human extends Animal {
  constructor(name, education) {
    super(name);
    this.education = education;
  }

  speak() {
    console.log(`${this.name} is speaking`);
  }
}

const naresh = new Human("Naresh", "degree")
const tommy = new Dog("Tommy", "Rott willer")
naresh.eat()
naresh.speak()
tommy.eat()
tommy.bark()

console.log(tommy);