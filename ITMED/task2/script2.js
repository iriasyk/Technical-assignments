'use strict';

let start = 1;
let resultArr = [];

while (start <= 100) {
    resultArr.push(start++);
}

console.log(resultArr); // result array from 1 to 100

let deleteRandomNumber = resultArr.splice(Math.floor(Math.random() * resultArr.length), 1);
console.log(`delete random number - ${deleteRandomNumber}`); // Deleted number

console.log(resultArr); // result without 1 number

function compareRandom() {
    return Math.random() - 0.5;
}

resultArr.sort(compareRandom);
console.log(resultArr); // compare random number

deleteRandomNumber in resultArr ? console.log(`delete random number - ${deleteRandomNumber}`) : console.log('not found');
