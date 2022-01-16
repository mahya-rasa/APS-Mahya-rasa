//array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const friends = ["kosar", "jamal", "hossein"];

// {
//     0:1,
//     1:2,
//     2:3,
// }

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);

//array operators

//slice
const chars = ["a", "b", "c", "d", "f", "e"];
// console.log(chars.slice(2));
// console.log(chars.slice(2, 4));
// console.log(chars.slice(-2));
// console.log(chars.slice(-1));
// console.log(chars.slice(2, -1));

//NOTE:copy an array

// console.log([...chars]);

// console.log(chars.slice());

//splice

// console.log(chars.splice(2, 3));
// console.log(chars);
// console.log(chars.splice(-1));
// console.log(chars);

//reverse

// console.log(chars.reverse());
// console.log(chars);

//concat

// const chars2 = ["g", "h", "i", "j"];

// console.log(chars.concat(chars2));

// console.log([...chars, ...chars2]);

const grades = [19, 18, 20, 12, 16, 17, 20];

for (const [i, grade] of grades.entries()) {
  if (grade >= 18) {
    console.log(i + ":very good😍😍");
  } else {
    console.log(i + ":shame on you😒😒");
  }
}

grades.forEach(function (grade, i) {
  if (grade >= 18) {
    console.log(i + ":very good😍😍");
  } else {
    console.log(i + ":shame on you😒😒");
  }
});
