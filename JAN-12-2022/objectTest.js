let firstName = "mahya";
let genderKey = "gender";

const customer = {
  firstName,
  lastName: "rasa",
  [genderKey]: "female",
  phoneNumber: 091299999,
  shoppingCard: ["goje", "pofak", "chips"],

  logging() {
    return "you are logged in";
  },
  addToShoppingCard() {
    return "add to shopping card";
  },
};

console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.logging());

console.log(customer["firstName"]);
console.log(customer["logging"]());

console.log(customer[genderKey]);

// customer.age = 10;
// console.log(customer);
