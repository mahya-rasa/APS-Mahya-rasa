//sync
//async

// function getNumber() {
//   for (let i = 0; i < 9001; i++) {
//     if (i === 9000) {
//       return i;
//     }
//   }
// }

// console.log("1");
// console.log("2");
// console.log("3");
// console.log(getNumber());
// console.log("4");
// console.log("5");
// console.log("6");

// alert("mahya");

// console.log("1");
// console.log("2");

//async

// async function getNumber() {
//   for (let i = 0; i < 9001; i++) {
//     if (i === 9000) {
//       return i;
//     }
//   }
// }

// console.log("1");
// console.log("2");
// console.log("3");
// getNumber().then( value => console.log(value));
// console.log("4");
// console.log("5");
// console.log("6");

//promise

// function getNumber() {
//   return new Promise((reslove, reject) => {
//     for (let i = 0; i < 9001; i++) {
//       if (i === 9000) {
//         reslove(i);
//       }
//     }
//   });
// }

// console.log("1");
// console.log("2");
// console.log("3");
// getNumber().then((value) => console.log(value));
// console.log("4");
// console.log("5");
// console.log("6");

let str;

setTimeout(function () {
  str = "mahya";
});

console.log(str);
