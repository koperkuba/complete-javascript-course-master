
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// // console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javaScriptIsFun = 'YES!';
// console.log(typeof javaScriptIsFun);

// let year
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);
// console.log(typeof year)

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// var job = "programmer";
// job = "teacher";

// lastName = 'Schmiedtmann';

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assigment operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x +1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);