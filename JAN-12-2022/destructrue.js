const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const one = arr[0];
// const two = arr[1];
// const three = arr[2];

// const [one, two, three] = arr;

const [one, two, ...others] = arr;

console.log(others);

//unpack to smaller data structure
console.log(one, two);
console.log(arr);

//object destructure

const person = {
  name: "bani",
  age: 18,
  job: "developer",
  sayHi() {
    console.log("hi guys");
  },
};

const { name, job, ...others2 } = person;
console.log(others2);
console.log(name);
console.log(job);
