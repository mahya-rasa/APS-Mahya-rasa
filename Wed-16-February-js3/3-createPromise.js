const users = [
  { name: "mahya", age: 22 },
  { name: "mahsa", age: 22 },
];

const showUsers = () => {
  users.forEach((element) => {
    console.log(element.name);
    console.log(element.age);
  });
};

//callBack
// const addUser = (x) => {
//   setTimeout(() => {
//     users.push({ name: "zahra", age: 22 });
//     x();
//   }, 100);
// };

// addUser(showUsers);

const addUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let length = users.length;
      //2
      users.push({ name: "zahra", age: 22 });
      //3
      if (users.length === length + 1) {
        resolve("added");
      } else {
        reject("error");
      }
    }, 100);
  });
};

// addUser().then((vlaue) => {
//   showUsers();
//   console.log(vlaue);
// });

//async

const handleUsers = async () => {
  await addUser();
  showUsers();
};

console.log(handleUsers());

// const handleUsers = () => {
//   addUser();
//   showUsers();
// };

// handleUsers();

const delayColor = (delay, color) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

const rainBow = async () => {
  await delayColor(1000, "green");
  delayColor(1000, "orange");
};

rainBow();
