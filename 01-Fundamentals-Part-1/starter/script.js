/*
console.log("Hello world");
let firstName = "Shiv";
console.log(firstName);

let myCountry = "India";
let myContinent = "Asia";
let myCountryPopulation = "1450 million";

console.log(myCountry);
console.log(myContinent);
console.log(myCountryPopulation);
*/
//Variable name conventions
// console.log(true);
/*
let boolTrue = true;
// console.log(boolTrue);
// console.log(typeof true);
console.log(typeof boolTrue);
// console.log(typeof 43);
// console.log(typeof 'Shiv');
boolTrue = "Yes!";
console.log(boolTrue);
console.log(typeof boolTrue);

let year;
console.log(year);
console.log(typeof year);
year = 2024;
console.log(typeof year);
console.log(typeof null);


let isIsland = true;
let myCountry = "India";
let myContinent = "Asia";
let myCountryPopulation = "1450 million";
let myCountryLanguage;

console.log(typeof isIsland);
console.log(typeof myCountry);
console.log(typeof myContinent);
console.log(typeof myCountryPopulation);
console.log(typeof myCountryLanguage);
*/

/*
let age = 30;
age = 31;

const birthYear = 2004;
// birthYear = 2005;  Eroor because const can't be changed
var job = 'Programmer';
jon = 'Student';
*/
/*
const now = 2024;
const ageShiv = now - 2004;
const ageSarah = now - 2003;
console.log(ageShiv, ageSarah);


const firstName = 'Shiv';
const lastName = 'Nandan';

console.log(firstName + ' ' + lastName);

let x = 10+5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

console.log(ageShiv > ageSarah);
console.log(ageShiv >= 18);

const isfullAge = ageShiv >= 18;
console.log(now - 2005 > now - 2003);
*/
/*
const firstName = 'Shiv';
const job = 'Student';
const birthYear = 2004;
const year = 2024;

const shiv = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(shiv);

const shivNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(shivNew);
console.log(`Just a regular string......`);
console.log('String with \n\
multiple \n\
lines');
console.log(`String with 
multiple 
lines`);
*/

/*
const age = 15;

if(age >= 18){
    console.log("Sarah can start Driving License :)");
} else {
    let yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}



let favNumber = Number(prompt("Enter your favourite number?"));
console.log(favNumber);
console.log(typeof favNumber);

if(favNumber === 23){
    console.log("cool! 23 is an amazing number!");
} else if(favNumber === 7){
    console.log("7 is also a cool number!");
} else {
    console.log("Number is not not 23 and 7 and it is not fucin cool");
}
*/


// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if(hasDriverLicense && hasGoodVision){
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Some one else should drive');
// }
/*
const isTired = true;

console.log(hasDriverLicense && hasDriverLicense && isTired);

if(hasDriverLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
} else {
    console.log('Some one else should drive');
}
*/
/*
const day = "wednesday";

switch(day) {
    case 'monday': // it does strict comparison i.e. day === 'monday'
        console.log('Plane a course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code example');
        break
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
}
*/

const age = 1;
age >= 18 ? console.log('I like to drink wine :)'): console.log('I like to drink water');

const drink = age >= 18 ? 'Wine' : 'water';

console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'water'}`);










