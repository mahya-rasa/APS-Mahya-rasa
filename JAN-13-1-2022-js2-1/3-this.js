// //method -> obj
// //function -> window

//window  // function
//obj   //method

function test() {
  console.log(this); //window
}

// test();

const customer = {
  lastName: "mohmadi",
  age: 18,
  gender: "male",
  shoppingCard: ["pofak", "chips"],

  login1: () => {},

  login() {
    console.log(this); // customer
    this.shoppingCard.forEach(function (el) {
      console.log(el);
      console.log(this); //window
      // }, this); //hale mokele window  !!! -> obj
    });
  },
  loginArrow() {
    console.log(this); // customer
    this.shoppingCard.forEach((el) => {
      console.log(el);
      console.log(this); //customer
    });
  },
  addToShoppingCard() {
    return "add to ";
  },
};

// customer.login();

const person = {
  firstName: "Donald",
  lastName: "Trump",
  fullName() {
    // local scope
    console.log(this); //person
    return `${this.firstName} ${this.lastName}`;
  },
  hisName: () => {
    // global scope
    console.log(this); //window
    return `${this.firstName} ${this.lastName}`; //undefined
  },
  shoutName() {
    setTimeout(function () {
      console.log(this); //window
      console.log(this.fullName());
    }, 3000);
  },
  //take a look at window.setTimeout
  sayName: function () {
    setTimeout(() => {
      console.log(this); //person
      console.log(this.fullName());
    }, 3000);
  },
  sayName2: () => {
    setTimeout(() => {
      function test() {
        console.log(this); //window
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
