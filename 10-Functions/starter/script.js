'use strict'

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 100);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 2473979248,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 2473979248) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //High oredr function

// const trensformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// trensformer('JavaScript is the best!', upperFirstWord);
// trensformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('😂');
// };

// document.body.addEventListener('click', high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('MyLove');

// //challenge

// const greetArray = greeting => name => console.log(`${greeting} ${name}`);
// greetArray('Hi')('Shiv');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} fligth ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// // book(23, 'Sarah williams'); //does not work
// // Call method
// book.call(eurowings, 23, 'Shiv Nandan');
// console.log(eurowings);
// book.call(lufthansa, 239, 'Akash Modi');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, '583', 'Jiya Singh');
// console.log(swiss);

// //Apply meythod - It will do same as call but it will not take arguments as string literals but it will take argument as an array

// const flightData = [583, 'Unnati Singh'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// //Bind method - allows us to manually set this keyword difference is that it immediatly does not call the function but it returns  afunction that binds this keyword

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jiya Singh');
// bookEW23('Kashish Kasaudhan');

// // Bind with event listener

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial appication

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); //addVAT = value => value + value *? 0.23

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   //get answer
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     //Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// // poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// const runOnce = function () {
//   console.log('This willnever run agains')
// }

// runOnce()
// // immediately invoked eunction expression
// ;(function () {
//   console.log('This will never run again')
// })() // function only called once
// ;(() => console.log('This will never get executed'))()

// {
//   const isPrivate = 23
//   var notPrivate = 23
// }

// // console.log(isPrivate);
// console.log(notPrivate)

// const secureBooking = function () {
//   let passengerCount = 0

//   return function () {
//     passengerCount++
//     console.log(`${passengerCount} passengers`)
//   }
// }

// const booker = secureBooking()
// console.log(100)

// booker()
// booker()
// booker()

// // Closure is the closed over variable environment of the execution context in which a function was created even after that execution context is gone
// // or A closure gives a function access to all the variables of its parent function even after that parent function has returned. The function keeps a reference tp its outer scope whic preserves the scope chain throughut the time
// // A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place

// let f
// const g = function () {
//   const a = 23
//   f = function () {
//     console.log(a * 2)
//   }
// }

// const h = function () {
//   const b = 777
//   f = function () {
//     console.log(b * 2)
//   }
// }

// g()
// f()
// h()
// f()

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`)
//     console.log(`There are 3 group, each with ${perGroup} passengers`)
//   }, wait * 1000)
//   console.log(`Will start boarding in ${wait} seconds`)
// }

// setTimeout(function () {
//   console.log('Timer')
// }, 1000)

// boardPassengers(180, 3)
let g
const f = function () {
  const header = document.querySelector('h1')
  header.style.color = 'red'
  g = document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue'
  })
}

f()
