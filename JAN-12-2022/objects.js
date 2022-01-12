let number = 12;

const jobKey = "job";

const shirin = {
  number,
  name: "shirin",
  age: 18,
  sayHi() {
    return "hi, i am shirin";
  },
  [jobKey]: "teacher",
};

console.log(shirin.number);
console.log(shirin.name);
console.log(shirin.age);
console.log(shirin.sayHi());
console.log(shirin.jobKey);

console.log(shirin["number"]);
console.log(shirin["name"]);
console.log(shirin["age"]);
console.log(shirin["sayHi"]());

const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;
};

const mahya = new Person("mahya", 23);
