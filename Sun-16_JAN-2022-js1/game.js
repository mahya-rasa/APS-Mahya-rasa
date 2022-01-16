// let num2 = parseInt(prompt("guess num:"));
// let num = Math.floor(Math.random() * 2) + 1;

// // console.log(num);

// while (num2 !== num) {
//   console.log(num2, num);
//   console.log(num === num2);
//   num2 = prompt("no , try again");
// }
// console.log("afarin");

let guss = parseInt(prompt("guss a number:"));
const randonNum = Math.floor(Math.random() * 2) + 1;

while (guss !== randonNum) {
  if (guss < randonNum) {
    guss = parseInt(prompt("the number is grater:"));
  } else {
    guss = parseInt(prompt("the number us less:"));
  }
}
alert(`braaavoooo ${guss} true`);
