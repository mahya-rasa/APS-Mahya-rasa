//this

//method ->
//function -> window

// function test() {
//   console.log(this);
// }

// test();

const customer = {
  firstName: "bani",
  lastName: "rezai",
  age: 18,
  genger: "male",
  shoppingCard: ["pofak", "chips"],

  login() {
    console.log(`${this.firstName} is logged in`);
  },
  addToShoppingCard() {
    this.shoppingCard.forEach((el) => {
      console.log(el);
      console.log(this);
    });
  },
};

// customer.login();
customer.addToShoppingCard();
