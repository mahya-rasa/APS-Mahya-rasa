const btns = document.querySelectorAll("button");
const ps = document.querySelectorAll("p");

// for (const btn of btns) {
//   btn.addEventListener("mouseenter", () => {
//     // btn.style.backgroundColor = "red";
//     // btn.style.color = "white";
//     colorise();
//   });
// }

for (const btn of btns) {
  btn.addEventListener("mouseenter", colorise);
}

for (const p of ps) {
  p.addEventListener("mouseenter", () => {
    // p.style.backgroundColor = "red";
    // p.style.color = "white";
    colorise();
  });
}

//this

function colorise() {
  this.style.backgroundColor = "red";
  this.style.color = "white";
}
