// //method -> obj
// //function -> window

// function test() {
//   console.log(this);
// }

// test();

const customer = {
  lastName: "mohmadi",
  age: 18,
  gender: "male",
  shoppingCard: ["pofak", "chips"],

  login1: () => {},

  login() {
    this.shoppingCard.forEach(function (el) {
      console.log(el);
      console.log(this);
    });
  },
  addToShoppingCard() {
    return "add to ";
  },
};

customer.login();

const person = {
  firstName: "Donald",
  lastName: "Trump",
  fullName() {
    // local scope
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
  hisName: () => {
    // global scope
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName() {
    setTimeout(function () {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
  //take a look at window.setTimeout
  sayName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
  sayName2: () => {
    setTimeout(() => {
      function test() {
        console.log(this);
      }
      test();
      //   console.log(this);
      //   console.log(this.fullName());
    }, 3000);
  },
};

// console.log(person.fullName())
// console.log(person.hisName())
// console.log(person.shoutName());
//console.log(person.sayName());
console.log(person.sayName2());
