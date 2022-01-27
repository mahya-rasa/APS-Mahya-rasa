const box = document.querySelector(".box");
const overlay = document.querySelector(".overlay");

const btnCloseBox = document.querySelector(".close-box");

const btnOpenBox = document.querySelector(".show-box");

function closeBox() {
  box.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnOpenBox.addEventListener("click", function (e) {
  box.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseBox.addEventListener("click", closeBox);

overlay.addEventListener("click", closeBox);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeBox();
  }
});
