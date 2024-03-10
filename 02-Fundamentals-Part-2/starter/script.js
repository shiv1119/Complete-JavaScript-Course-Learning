'use strict';
/*
let hasDriversLicense = true;
const passTest = false;

if(passTest) hasDriversLicense = false;
if(hasDriversLicense) console.log('I can drive :D');

*/
/*
function logger(){
    console.log("Hello world");
}

logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const result = fruitProcessor(5, 0);
console.log(result);
console.log(fruitProcessor(5, 4));



function calcAge(birthYear) {
    return 2024 - birthYear;
}

console.log(calcAge(2004));

const calcAge2 = function(birthYear){
    return 2024 - birthYear;
}

const age2 = calcAge2(2003);
console.log(age2);

*/
/*
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(2004);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2004, 'Shiv'));
*/
/*
function cutFruitPices(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePices = cutFruitPices(apples);
    const orangePices = cutFruitPices(oranges);
    const juice = `Jucie with ${applePices} pices of apple and ${orangePices} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));

*/
/*
const friends = ['Akash', 'Pruthivi', 'Prem'];
// console.log(friends);

// const years = new Array(1991, 1984, 2003, 2004);
// console.log(years);
console.log(friends[2]);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Sarvesh";
console.log(friends);

const shiv = ['Shiv', 'Nandan', 2024 - 2004, 'Student',friends]
console.log(shiv);

const calcAge = function(birthYear){
    return 2024 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [age1, age2, age3]
console.log(ages);

*/
/*
const friends = ['Akash', 'Pruthivi', 'Prem'];
const newLength = friends.push('Gaurav'); // add element at last
// console.log(friends);
// console.log(newLength);
friends.unshift("Modi"); // add element at first
// console.log((friends));

const popped = friends.pop() //delete from last
console.log(popped);

friends.shift();
friends.push(23);
console.log(friends);

console.log(friends.indexOf('Pruthivi'));

console.log(friends.includes('Pruthivi'));
console.log(friends.includes('23')); //false
console.log(friends.includes(23));

if(friends.includes('Prem')){
    console.log("You have a friend called Prem");
}
*/

/*
const shiv = {
    firstName : 'Shiv',
    lastName : 'Nandan',
    age : 2024 - 2004,
    job : 'Student',
    friends : ['Akash', 'Pruthivi', 'Prem']
};

console.log(shiv);
console.log(shiv.lastName);
console.log(shiv['firstName']);
const nameKey = 'Name';

console.log(shiv['first' + nameKey]);
console.log(shiv['last' + nameKey]);



// const interestedIn = prompt("What do you want to know about Shiv? Choose between firstName, lastName, age, job, and friends");
// // console.log(shiv[interestedIn]);

// if(shiv[interestedIn]){
//     console.log(shiv[interestedIn]);
// } else {
//     console.log('Fuck value does not exists');
// }

shiv.location = 'Blr';
shiv['instagram'] = '@btw_shivnandan';
console.log(shiv);

console.log(`${shiv.firstName} has ${shiv.friends.length} friends, and his best friend is called ${shiv.friends[2]}`);

*/
/*
const shiv = {
    firstName : 'Shiv',
    lastName : 'Nandan',
    birthYear : 2004,
    job : 'Student',
    friends : ['Akash', 'Pruthivi', 'Prem'],
    hasDriverLicense : true,
    // calcAge: function(birthYear){ //Methods(function expression)
    //     return 2024 - birthYear;
    // calcAge: function(){ 
    //     return 2024 - this.birthYear;
    // }
    calcAge: function(){ 
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    getSummary : function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
    }

};
console.log(shiv.calcAge());
console.log(shiv.age);
// console.log(shiv['calcAge']());

// if(shiv.hasDriverLicense){
//     console.log(`${shiv.firstName} is a ${shiv.age}-year old ${shiv.job}, and he has  ${this.hasDriverLicense ? 'a' : 'no'} driver's license`);
// } else {
//     console.log(`${shiv.firstName} is a ${shiv.age}-year old ${shiv.job}, and he has  ${this.hasDriverLicense ? 'a' : 'no'} driver's license`);
// }

console.log(shiv.getSummary());

*/

// for(let rep = 1; rep <= 10; rep++){
//     console.log(rep);
// }
/*
const types = [];
const shiv = [
    'Shiv', 
    'Nandan', 
    2024 - 2004, 
    'Student', 
    ['Gaurav', 'Kashish', 'Shreya', 'Sarvesh']
]

for(let i = 0; i < shiv.length; i++){
    console.log(shiv[i]);

    // types[i] = typeof shiv[i];
    types.push(typeof shiv[i]);
}

console.log(types);
*/

// const types = [];
/*
const shiv = [
    'Shiv', 
    'Nandan', 
    2024 - 2004, 
    'Student', 
    ['Gaurav', 'Kashish', 'Shreya', 'Sarvesh']
]
for(let i = shiv.length - 1; i >= 0; i--){
    console.log(i, shiv[i]);
}

for(let exercise = 1; exercise <= 3; exercise++){
    console.log(`-------------Starting Exercises ${exercise}-------------`);

    for(let rep = 1; rep <= 5; rep++){
        console.log(`Lifting weight repetitions ${rep}`);
    }
}
*/

let dice =Math.trunc(Math.random() * 6) + 1;
while(dice != 6){
    console.log(`You rolled a ${dice}`);
    dice =Math.trunc(Math.random() * 6) + 1;
    if(dice == 6) console.log('Loop is about to end.......');
}





























