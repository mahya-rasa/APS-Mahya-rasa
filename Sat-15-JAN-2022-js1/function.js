//function

//the piece of code that we can reuse over and over again

//clean code    don't repeat your self

function logger() {
  console.log("you are very nice❤️");
}
//call innoke execute run

// logger();
// logger();
// logger();
// logger();
// logger();

//parameter argument   return //void

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(2, 3);
// sum("mahya ", "rasa");
// sum(53858, 123);

//pop()  //remove end item from array

function popDuplicate(array) {
  const newarr = [];
  for (let i = 0; i < array.length - 1; i++) {
    newarr.push(array[i]);
  }
  return newarr;
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(popDuplicate(arr));

//statment and expression

//function declaration   regular function
//function expression
//arrow function  ES6  FE -shorter faster to write

console.log(calcAge(1999));

function calcAge(birhYear) {
  return 2022 - birhYear;
}

console.log(age(2010));

const age = function (birhYear) {
  return 2022 - birhYear;
};

// console.log(age(2010));

// const age = (birhYear) => 2022 - birhYear;

// console.log(age(2010));

// const sum = (x, y) => {
//   x + y;
// };

// console.log(sum(10, 12));

//function calling other function
