//this
//arrow function

//method -> obj
//function -> window

const book = {
  id: 234,
  name: "java script in 21 days",
  writer: ["bani", "benyamin"],
  summary() {
    console.log(`${this.id} is ${this.name}`);
  },
  sayWriters() {
    // this.writer.forEach((el) => {
    //   console.log(el, this);
    // });
    this.writer.forEach(function (el) {
      console.log(el, this);
    });
  },
  sayName: () => {
    console.log(this);
  },
};

// book.summary();
book.sayWriters();
// book.sayName();

const person = {
  firstName: "mahya",
  lastName: "rasa",
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
  hisName2: () => {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
  hisName3: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};

// console.log(person.fullName());
// console.log(person.hisName());
// console.log(person.shoutName());
// console.log(person.sayName());
// console.log(person.hisName2());
// console.log(person.hisName3());
