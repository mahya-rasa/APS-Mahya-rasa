//shopping store

// customer
// product
// shopper
// driver
let firstName = "bani";
let ageKey = "age";

const customer = {
  firstName,
  lastName: "rezai",
  [ageKey]: 18,
  genger: "male",
  shoppingCard: ["pofak", "chips"],

  login() {
    return "logged in";
  },
  addToShoppingCard() {},
};

console.log(customer.firstName);
console.log(customer[ageKey]);
console.log(customer.shoppingCard[0]);
console.log(customer.login());

console.log(customer["firstName"]);
