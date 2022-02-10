// let mahya;

// setTimeout(() => {
//   mahya = "rasa";
// }, 200);

// alert(mahya);

// function getNumber() {
//   for (let i = 0; i < 9001; i++) {
//     if (i === 9000) {
//       return i;
//     }
//   }
// }

//promise

function getNumber() {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 9001; i++) {
      if (i === 9000) {
        resolve(i);
      }
    }
  });
}

console.log("1");
console.log("2");
console.log("3");

getNumber().then((value) => {
  console.log(value);
});

console.log("4");
console.log("5");
