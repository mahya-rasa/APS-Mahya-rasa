//shopping store

//oop

//customer
//product
//driver

let group = "aps";
let ageKey = "age";

const student = {
  name: "shekofe",
  [ageKey]: 20,
};

const customer = {
  group,
  lastName: "mohmadi",
  [ageKey]: 18,

  [ageKey]: 22,
  gender: "male",
  shoppingCard: ["pofak", "chips"],

  login1: () => {},

  login() {
    return "logged in";
  },
  addToShoppingCard() {
    return "add to ";
  },
};

console.log(customer.firstName);

console.log(customer["lastName"]);
console.log(customer["addToShoppingCard"]());

customer.addToShoppingCard();
customer["addToShoppingCard"]();

console.log(customer[ageKey]);
