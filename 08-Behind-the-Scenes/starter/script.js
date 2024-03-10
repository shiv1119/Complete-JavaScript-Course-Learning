'use strict';
/*
function calcAge(birthYear) {
  const age = 2024 - birthYear;
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven';
      const str = `Oh! and you are a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}
const firstName = 'Shiv';
calcAge(1990);
*/
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1991;

// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExp = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All product delete');
// }

// console.log(this);

// const calcAge = function (b) {
//   console.log(2037 - b);
//   console.log(this);
// };

// calcAge(2004);

// const calcAgeArrow = b => {
//   console.log(2037 - b);
//   console.log(this);
// };

// calcAgeArrow(2004);

// const Jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// Jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = Jonas.calcAge;

// matilda.calcAge();
// var firstName = 'Shiv';
// const Jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     const isMillenial = function () {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// Jonas.greet();
// Jonas.calcAge();

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;

// console.log('Friends', friend);
// console.log('Me', me);

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
// console.log('Before merraige : ', jessica);
// console.log('After marriage : ', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before merraige : ', jessica2);
console.log('After marriage : ', jessicaCopy);
