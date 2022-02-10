//https://jsonplaceholder.typicode.com/photos
//https://jsonplaceholder.typicode.com/users

//504 timeout
let url = "https://jsonplaceholder.typicode.com/users";
fetch(url).then((Response) => {
  Response.json().then((data) => {
    console.log(data);
  });
});

// const books = [
//   { title: "java", content: "hello" },
//   { title: "html", content: "bye" },
// ];

// function showBooks() {
//   books.forEach((element) => {
//     console.log(element.title + " - " + element.content);
//   });
// }

// function addBook(callback) {
//   setTimeout(() => {
//     books.push({ title: "css", content: "nice" });
//     callback();
//   }, 2000);
// }

// addBook(showBooks);

//promise

function addBook() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //length :2
      let length = books.length;
      books.push({ title: "css", content: "nice" });

      //length:3

      if (books.length === length + 1) {
        resolve("added");
      } else {
        reject("error");
      }
    }, 2000);
  });
}

addBook().then((data) => console.log(data));
