// //oop

// //procedural
// //functional
// //OOP

// let productName = "pofak";
// let userName = "mahya";

// function shop(productName, userName) {
//   //add
// }

// //shopping

// const user = {
//   name: "mahya",
//   list: [],
//   shop(product) {
//     this.list.push(product);
//   },
// };

// // const product = {
// //   name: "pofak",
// // };

// // let num = 10;

// // // console.dir(num.__proto__);

// // const getNum = () => {};

// // function createUser(name, age) {
// //   const user = {};
// //   user.name = name;
// //   user.age = age;

// //   return user;
// // }

// // const mahya = createUser("mahya", 22);
// // const mahsa = createUser("mahsa", 24);
// // console.dir(mahya);

// // //constructor
// // function User(name, age) {
// //   //this
// //   console.log(this);
// //   this.name = name;
// //   this.age = age;
// // }

// // const zahra = new User("zahra", 23);

// // console.dir(zahra);

// // //abstraction
// // //inheritance
// // //encapsolation
// // //polymorphism

// // // const animal = {
// // //   eats: true,
// // //   walk() {
// // //     console.log("walk");
// // //   },
// // //   speak() {
// // //     console.log("speak");
// // //   },
// // // };

// // // const dog = {
// // //   legs: 4,
// // //   speak() {
// // //     console.log("vag vag");
// // //   },
// // // };

// // // dog.__proto__ = animal;

// // // console.log(dog);
// // // console.log(dog.eats);
// // // dog.walk();
// // // dog.speak();

// function Animal() {
//   this.eats = true;
//   this.walk = () => {
//     console.log("walk");
//   };
// }

function Dog() {
  let status = true;

  let legs = 4;
  this.getLegs = () => {
    console.log("this dog " + legs);
  };

  this.getStatus = () => {
    console.log(status);
  };
  this.setStatus = (ss) => {
    status = ss;
  };
}
Dog.prototype = new Animal();
const animal = new Animal();
const dog = new Dog();

console.log(dog);
console.log(dog.eats);
dog.getStatus();
dog.setStatus(false);
dog.getStatus();

class Animal {
  constructor(name, color) {
    this.name = name;
    this.legs = 4;
    this.color = color;
    // this.walk = function () {
    //   this.color = "white";
    // };
  }
  walk = function () {
    this.color = "white";
  };

  //   walk2() {
  //     console.log("jh");
  //   }
}

const animal1 = new Animal("benji", "brown");

console.log(animal1.prototype);

Animal.prototype.runing = function () {
  console.log("djkhd");
};
Animal.prototype.len = () => {
  return "kk";
};

console.log(animal1);
console.log(Animal === Animal.prototype.constructor);

// class Dog extends Animal {}

// class User {
//   constructor(username, email) {
//     this.username = username;
//     this.email = email;
//     this.count = 0;
//   }

//   login() {
//     this.count++;
//     console.log(`user ${this.username}  logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`user logged out`);
//     return this;
//   }
//   loginCounter() {
//     console.log(`Counter login:   ${this.count}`);
//     return this;
//   }
// }

// class Sirvan extends User {
//   constructor(username, email, title) {
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser() {
//     const newUser = users.filter((user) => user.count <= 2);
//     console.log(users);
//     console.log(newUser);
//   }
// }

// const person1 = new User("kazem", "kazem@email.com");
// const person2 = new User("ghasem", "ghasem@email.com");
// const person3 = new User("jasem", "jasem@email.com");
// // person1.login().login().login();

// const users = [person1, person2, person3];

// const nexGen = new Sirvan(
//   "bacheye Sirvan",
//   "bacheyeSirvan@email.com",
//   "ekhraj kon koochak"
// );

// // console.log(nexGen);

// // console.log(nexGen.deleteUser());

// //
// //
// //

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     return `${this.name} is eating!`;
//   }
// }

// class Cat extends Pet {
//   constructor(name, livesLeft = 9) {
//     super(name);
//     this.livesLeft = livesLeft;
//   }
//   meow() {
//     return "MEOWWW!!!";
//   }
// }

// const gorbe = new Cat("pishi", 3);
// console.log(gorbe);

// class Dog extends Pet {
//   constructor(livesLeft = 9) {
//     super();
//     this.livesLeft = livesLeft;
//   }
//   play() {
//     return `${this.livesLeft} lives left`;
//   }
// }

// // const rex = new Dog("rex", 3, 5);
// const rex = new Dog(5);
// console.log(rex);
// console.log(rex.eat());

// class CatDog extends Dog {
//   constructor(livesLeft, cat, dog) {
//     super(livesLeft);
//     this.cat = cat;
//     this.dog = dog;
//   }
//   moonWalk() {
//     return `${this.cat} and ${this.dog} can do a moon walk`;
//   }
// }

// const catDog = new CatDog(4, "cat", "dog");
// console.log(catDog);
