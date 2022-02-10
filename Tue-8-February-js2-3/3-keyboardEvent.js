//keypress
//keydown

// document.addEventListener("keypress", (e) => {
//   console.log(e);
// });

const bullet = document.querySelector("div");

let topb = 0;
let leftb = 0;

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
    // console.log(bullet.style.top);
    bullet.style.top = `${topb--}px`;
  } else if (e.code === "ArrowDown") {
    bullet.style.top = `${topb++}px`;
  }

  //using switch case is possible
});
