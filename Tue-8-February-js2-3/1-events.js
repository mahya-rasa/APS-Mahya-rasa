//event

const btn1 = document.querySelector("button");
const btn2 = btn1.nextElementSibling;
const btn3 = btn2.nextElementSibling;

//
// btn1.onclick = function () {
//   alert("mahya");
// };
// btn1.onclick = function () {
//   alert("rasa");
// };

// btn1.onclick = click;

// function click() {
//   alert("mahya");
//   alert("rasa");
// }

// btn2.addEventListener("click", function () {
//   alert("deniz");
// });

// btn2.addEventListener("click", function () {
//   alert("mahya");
// });

//BOM

//resize
// const h1width = document.createElement("h1");
// const h1height = document.createElement("h1");
// document.body.append(h1width, h1height);

// btn3.addEventListener("click", function () {
//   h1width.textContent = window.innerWidth;
//   h1height.textContent = window.innerHeight;
// });

// window.addEventListener("resize", function (e) {
//   h1width.textContent = window.innerWidth;
//   h1height.textContent = window.innerHeight;
// });
Event;
KeyboardEvent;
PointerEvent;
SubmitEvent;

// document.addEventListener("keydown", function (e) {
//   console.log(e);
// });

// console.dir(btn1);
// console.log(btn1);

const randomColor = () => {
  const red = parseInt(Math.random() * 256);
  const green = parseInt(Math.random() * 256);
  const blue = parseInt(Math.random() * 256);
  return `rgb(${red} , ${green}, ${blue})`;
};

btn3.addEventListener("click", function () {
  //   document.body.style.backgroundColor = randomColor();
  document.body.style.backgroundColor = `rgb(${rand()} , ${rand()} ,${rand()}`;
});

const rand = () => {
  return parseInt(Math.random() * 256);
};
