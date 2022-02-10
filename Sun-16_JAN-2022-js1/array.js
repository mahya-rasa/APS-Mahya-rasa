//array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//slice

// console.log(numbers.slice(2));
// console.log(numbers.slice(2, 4));
// console.log(numbers.slice(-2));
// console.log(numbers[numbers.length - 1]);
// console.log(numbers.slice(-1)[0]);
// console.log(numbers.slice(2, -1));

// console.log(numbers.slice());

// console.log([...numbers]);

//splice
// console.log(numbers.splice(2, 3));
// console.log(numbers);
// console.log(numbers.splice(-1));
// console.log(numbers);

//reverse

// console.log(numbers.reverse());
// console.log(numbers);

//concat

// let numbers2 = [10, 11];
// console.log([...numbers, ...numbers2]);

//map , filter , some  every find  reduce foreach

// for (const [i, number] of numbers.entries()) {
//   console.log(i);
//   console.log(number);
// }

// numbers.forEach((number, index) => {
//   console.log(number, index);
// });

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let x = numbers.filter((number) => {
//   return number > 3;
// });

// console.log(x);
// console.log(numbers);

//map
// let m = numbers.map((element) => element * 2);

// console.log(m);

//every
let n = numbers.every(function (ele) {
  // true
  return ele < 10;
});

//some

numbers.some(function (ele) {
  //true
  return el > 4;
});
// console.log(
//   numbers.some(function (ele) {
//     return ele > 4;
//   })
// );

// //find

console.log(
  numbers.find(function (el) {
    return el > 4; //5
  })
);
// console.log(n);

//indexOf

//includes

numbers.push(10);

numbers.reduce(function (pi, ci) {
  //add
  //sort
  pi + ci;
});
