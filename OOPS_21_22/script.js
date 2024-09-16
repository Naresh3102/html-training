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

  getPassword() {
    return this.#password;
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

// console.log(Person1.getPassword());

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

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating.`);
//   }

//   introduce() {
//     console.log(`I am ${this.name}.`);
//   }

//   speak() {
//     console.log(`${this.name} is making some noise`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   // Over riding
//   speak() {
//     console.log(`${this.name} is barking`);
//   }
// }

// class Mammal extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   // Over riding
//   speak() {
//     console.log(`${this.name} is speaking`);
//   }
// }

// class Human extends Mammal {
//   constructor(name, education) {
//     super(name)
//     this.education = education;
//   }
// }

// const naresh = new Human("Naresh", "degree");
// const tommy = new Dog("Tommy", "Rott willer");
// naresh.eat();
// naresh.speak();
// tommy.eat();
// tommy.speak();

// console.log(tommy);

const CanFly = {
  fly() {
    console.log("Flying");
  },
};

const CanSwim = {
  swim() {
    console.log("Swimming");
  },
};

class Animal {
  eat() {
    console.log("Eating");
  }
}

class Duck extends Animal {
  speak() {
    console.log("Quack");
  }
}

Object.assign(Duck.prototype, CanFly, CanSwim);

const duck = new Duck();

// console.log(duck);

// duck.eat()
// duck.speak()

class Calculator {
  add(a, b, c) {
    if (arguments.length === 2) {
      return a + b;
    } else if (arguments.length === 3) {
      return a + b + c;
    } else {
      return "Invalid arguments";
    }
  }
}

// const calc = new Calculator()

// console.log(calc.add(5, 15));
// console.log(calc.add(5, 15, 20));
// console.log(calc.add(5, 15, 20, 25));

// const arr = [1,23,4]

// console.log(arr);
// console.log(arr.length);

// let str = "Naresh"

// console.log(str);

// const timeoutID = setTimeout(() => {
//   console.log("Inside Timeout function");
// }, 5000);

// console.log(timeoutID);
// clearTimeout(timeoutID)

// const intervalId = setInterval(() => {
//   console.log("inside interval");
// }, 3000);

// console.log(intervalId);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 10000);

// try {
//   console.log(firstName);
// } catch(err) {
//   if(err.name === "ReferenceError") {
//     console.log("Some variable is not defined");
//   }
// }

// console.log("Hello");

function outer() {
  let firstname = "Naresh";

  function inner() {
    console.log("inner function " + firstname);
  }
  return inner;
}

const inner = outer();

inner();
