//destructure

//array destructure

// const one = arr[0];
// const two = arr[1];

// const [one, two] = arr;

// console.log(one, two); // 1 , 2

const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];


const [one , two , ...others ]= arr; //others 3, 4,5 
const arr3 = [...arr, ...arr2];
console.log(arr3);

//...

const str = "hello"
console.log(...str);  //  h e l l o
Math.max(1,2,3,4);//4
Math.max(arr) ; //NaN
Math.max(...arr); //5

// const one = arr[0];
// const two = arr[1];

// console.log(one, two);

// const [one, two, ...others] = arr;
// console.log(one, two);
// console.log(others);

// //object
// const customer = {
//   lastName: "mohmadi",
//   age: 18,
//   gender: "male",
//   shoppingCard: ["pofak", "chips"],

//   login1: () => {},

//   login() {
//     return "logged in";
//   },
//   addToShoppingCard() {
//     return "add to ";
//   },
// };

// const { lastName, gender } = customer;

// console.log(lastName, gender);

// const circle = {
//   title: "circle1",
//   radius: 5,
// };

// function circleArea({ radius, title }) {
//   return `the ${title} is  ${Math.PI * radius * radius}`;
// }

// console.log(circleArea(circle));

//spread operarator ...

let srt = "salam dostan";

console.log([...srt]);

const obj1 = {
  name: "mahdie",
  family: "dtm",
  age: 22,
  isAlive: true,
};

const { name, age } = obj1;

console.log(name, age);

//spread  ...
//rest  ...

const obj2 = {
  mahya: "gol",
};

// const array2 = [...obj1];
const obj3 = [{ ...obj1, ...obj2 }];

console.log(obj3);
