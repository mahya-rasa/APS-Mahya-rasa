// const secrectNumber = Math.floor(Math.random() * 20) + 1;

// const number = document.querySelector(".guess");
// const numberText = document.querySelectorAll(".number");

// const btnCheck = document.querySelector(".check");

// const message = document.querySelector(".message");

// btnCheck.addEventListener("click", function () {
//   const guess = Number(number.value);

//   if (!guess) {
//     message.textContent = "😒 no number";
//   } else if (guess === secrectNumber) {
//     numberText.textContent = secrectNumber;
//     document.body.style.backgroundColor = "green";
//     message.textContent = "👌 correct number";
//   } else if (guess > secrectNumber) {
//     message.textContent = " too high ⬆️";
//   } else if (guess < secrectNumber) {
//     message.textContent = " too low ⬆️";
//   }
// });

//primitive //object

let x = 10;
let y = x;

y++;
console.log(x);
console.log(y);

const car = {
  color: "red",
};

const car2 = car;
car2.color = "green";

console.log(car2);
console.log(car);

const str = "amir";
console.log(!!str);
