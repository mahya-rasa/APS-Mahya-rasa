// // const body = document.body;

// // console.log(body.childNodes[9]);
// // console.log(body.children[3]);

// // //parent node , next sibling , previus sibling , ...

// // const myDiv = body.children[3];
// // const myDiv2 = body.childNodes[9];

// // console.log(myDiv2.previousSibling);

// // document;

// //sructure

// console.log(document.body instanceof EventTarget);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof HTMLBodyElement);

// //serching

// //getElemet

// //querySelector

// const myDiv = document.getElementById("d1");

const body = document.body;
const myDiv = document.querySelector("div");
const h1 = document.createElement("h1");
h1.textContent = "hello";
myDiv.prepend(h1);
