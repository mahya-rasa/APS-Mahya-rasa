//function
//declaration
//expresion
//arrow

function logger() {
  console.log("mahya rasa");
}

// logger();
// logger();
// logger();
// logger();
// logger();
// logger();

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

console.log(sum(12, 3));

function sum(num1, num2) {
  return num1 + num2;
}

const sum2 = function (num1, num2) {
  return num1 + num2;
};

console.log(sum2(3, 5));

const sum4 = (num1, num2) => num1 + num2;

console.log(sum4(10, 20));

// const sum1 = sum(2, 3);
// console.log(sum1);
// sum("mahya", "rasa");
