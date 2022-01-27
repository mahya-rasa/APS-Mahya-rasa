//node DOM structure

// console.log(document.body instanceof EventTarget);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof Element);
console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof HTMLBodyElement);

//innerHTML
// const myDiv = document.querySelector("#d1");
// console.log(myDiv.innerHTML);

// myDiv.innerHTML += "<p> hello </p>";
// console.log(myDiv.innerHTML);

//textContent
// const myDiv = document.querySelector("#d1");
// const p = myDiv.querySelector("p");
// p.textContent += "zahra";

//attributes

//has , set , get , remove
// const btn = document.getElementById("btn");
// console.log(btn.hasAttribute("type"));

// console.log(btn.getAttribute("type"));
// console.log(btn.type);

// console.log(btn.getAttribute("mahya"));
// console.log(btn.mahya);

// console.log(btn.getAttribute("className"));
// btn.setAttribute("class", "btn1");
// btn.style.backgroundColor = "red";

//input value

const txtInput = document.getElementById("txt");
txtInput.setAttribute("vlaue", "mahya rasa");
console.log(txtInput.value);

txtInput.value = "mahya";
console.log(txtInput.value);
