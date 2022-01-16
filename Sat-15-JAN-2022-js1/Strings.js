//string
//""   ''  ``

let str1 = "hi guys, i'm mahya rasa";
let str2 = "i'm 23";

console.log(str1);

//string methods

// console.log(str1.length);

// console.log(str1[0]);
// console.log(str1[1]);
// console.log(str1[2]);
// console.log(str1[3]);
//read only immutable
str1[0] = "s";
console.log(str1);

console.log(str2.localeCompare(str1));

// console.log(str1.charAt(4));

// console.log(str1.charCodeAt(1));

// console.log(str1.concat(" ", str2));

// console.log(str1.endsWith("rasa"));

// console.log(str1.includes("mahya"));

// console.log(str1.repeat(3));

// console.log(str1.indexOf("mehdi"));

// console.log(str1.slice(2, 4));

// console.log(str1.split(","));

let str3 = "hi, i'm mahya 2 rasa and i'm 2 years old";

console.log(str3.replace(/\d+/g, "23"));

console.log(str3.search("mahya"));
