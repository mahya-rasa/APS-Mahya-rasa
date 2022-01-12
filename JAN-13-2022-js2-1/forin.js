const person = {
  name: "sirvan",
  age: 18,
  job: "developer",
  sayHi() {
    console.log("hi guys");
  },
};

for (const key in person) {
  console.log(key);
  console.log(person[key]);
}
