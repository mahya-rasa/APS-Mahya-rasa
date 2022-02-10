const student = {
  name: "shekofe",
  age: 12,
};

for (const key in student) {
  // console.log(key); // name , age
  // console.log(typeof key); // name , age

  console.log(student[key]); // shekofe 12
}

Object.keys(student); //name , age

Object.values(student); //shekofe , 12

// for (const key in student) {
//   console.log(key); //name

//   console.log(student[key]); //shekofe
// }

// for (const key in student) {
//   if (Object.hasOwnProperty.call(student, key)) {
//     const element = object[key];
//   }
// }

// console.log(Object.keys(student));

// console.log(Object.values(student));

// Object.keys(student);
// Object.values(student);

// student.hasOwnProperty("name");

// for (const key in student) {
//   if (Object.hasOwnProperty.call(student, key)) {
//     const element = object[key];
//   }
// }
