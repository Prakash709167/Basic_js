const name = "Prakash";
const course = "B.tech";
// console.log(name + course + 11212809);
console.log(`Hello, my name is ${name} and I enroll in course ${course} and my roll no is 1121**** `);

const newName = new String("Prakash-ufc=com");
// console.log(newName);

// console.log(newName.__proto__);
// console.log(newName.charAt(2));
// console.log(newName.indexOf('a'));
const newNaam = newName.substring(0,4);
console.log(newNaam);

const anothername = newName.slice(-7,4);
// console.log(anothername);
// const newString = "    prakash    ";
// console.log(newString);
// console.log(newString.trim());

const url = "https://prakash.com/prakash%20kumar";
console.log(url.replace('%20','_'));
console.log(url.includes('ritik'));
console.log(newName.split('-'));

