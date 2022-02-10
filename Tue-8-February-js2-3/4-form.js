// //form
// console.log(tForm); //name
// console.log(tweetForm); //id

// //doc forms
// console.log(document.forms[0]);
// console.log(document.forms.tForm);
// console.log(document.forms.tweetForm);

const form = document.querySelector("form");
const ul = document.querySelector("ul");

//elements
// console.dir(form.elements);
// console.dir(form.elements[0]);
// console.dir(form.elements[1]);
// console.dir(form.elements.username);
// console.dir(form.elements.tweet);

// console.dir(form.tweet);
// console.dir(form.username);

//submit

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log(e);
  //   console.log(e.target.username);
  //   console.log(e.target.elements.username);

  const li = document.createElement("li");
  li.textContent = `${e.target.username.value} : ${e.target.tweet.value}`;
  ul.append(li);

  e.target.username.value = "";
  e.target.tweet.value = "";
});
