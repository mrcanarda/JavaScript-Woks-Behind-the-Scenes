'use strict';

// SCOPE AND THE SCOPE CHAIN

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassinging outer scope's variable

      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    //console.log(str);
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// HOSTING AND TDZ IN PRACTICE

const myName = 'Jonas';

if (myName === 'Jonas') {
  const job = 'teacher';
  console.log(`Jonas is a ${job}`);
  const age = 2037 - 1989;
  console.log(age);
}

//Variables

console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExp (2,3));
console.log(addArrow);
//console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

console.log('numProducts');
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All produts deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
