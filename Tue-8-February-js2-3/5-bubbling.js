const form = document.querySelector("form");
const div = document.querySelector("div");
const p = document.querySelector("p");

//capure //window //doc // body // form //div //p
//target
//bubbling

// form.addEventListener("click", function (e) {
//   alert(`taget : ${e.target.tagName} , this :${e.currentTarget.tagName}`);
// });

// div.addEventListener("click", function (e) {
//   alert(`taget : ${e.target.tagName} , this :${this.tagName}`);
// });

// p.addEventListener("click", function (e) {
//   alert(`taget : ${e.target.tagName} , this :${this.tagName}`);

//   e.stopPropagation();
// });

p.addEventListener(
  "click",
  function (e) {
    alert(`sara`);
  },
  { once: true }
);

// form.addEventListener(
//   "click",
//   function (e) {
//     alert(
//       `taget : ${e.target.tagName} , this :${e.currentTarget.tagName}  captue`
//     );
//   },
//   { capture: true }
// );

// div.addEventListener(
//   "click",
//   function (e) {
//     alert(`taget : ${e.target.tagName} , this :${this.tagName}   capture`);
//   },
//   true
// );

// p.addEventListener(
//   "click",
//   function (e) {
//     alert(`taget : ${e.target.tagName} , this :${this.tagName}   capture`);
//   },
//   true
// );
