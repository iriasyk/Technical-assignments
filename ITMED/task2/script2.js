'use strict';

let start = 1;
let resultArr = [];

while (start <= 100) {
    resultArr.push(start++);
}

let generalDiv = document.querySelector('.general');
let newDiv = document.createElement("div");
newDiv.classList.add("form-control");
newDiv.style.marginTop = '10px';
newDiv.style.display = 'block';
newDiv.style.height = '100%';
newDiv.style.width = '100%';
generalDiv.appendChild(newDiv);

let spanForArrays = document.createElement('span');
newDiv.appendChild(spanForArrays);
spanForArrays.style.display = 'flex';
let textForArr1 = document.createTextNode(`1) Array 1-100: ${resultArr};`);
spanForArrays.appendChild(textForArr1);
console.log(resultArr); // result array from 1 to 100

let deleteRandomNumber = resultArr.splice(Math.floor(Math.random() * resultArr.length), 1);
let spanForDeleteRandomNumber = document.createElement('span');
newDiv.appendChild(spanForDeleteRandomNumber);
spanForDeleteRandomNumber.style.display = 'flex';
let textForArr2 = document.createTextNode(`2) Deleted element: ${deleteRandomNumber};`);
spanForDeleteRandomNumber.appendChild(textForArr2);
console.log(`delete random number - ${deleteRandomNumber}`); // Deleted number

let spanForArrays2 = document.createElement('span');
newDiv.appendChild(spanForArrays2);
spanForArrays2.style.display = 'flex';
let textForArr3 = document.createTextNode(`3) Array 1-99 with deleted element: ${resultArr};`);
spanForArrays2.appendChild(textForArr3);

console.log(resultArr); // result without 1 number


function compareRandom() {
    return Math.random() - 0.5;
}

resultArr.sort(compareRandom); // compare random for resultArr

let spanForArrays3 = document.createElement('span');
newDiv.appendChild(spanForArrays3);
spanForArrays3.style.display = 'flex';
let textForArr4 = document.createTextNode(`4) Array 1-99 with compare random numbers: ${resultArr};`);
spanForArrays3.appendChild(textForArr4);
console.log(resultArr); // compare random number

deleteRandomNumber in resultArr ?
    (function (){
        let spanForDeleteRandomNumber2 = document.createElement('span');
        newDiv.appendChild(spanForDeleteRandomNumber2);
        spanForDeleteRandomNumber2.style.display = 'flex';
        let textForArr5 = document.createTextNode(`5) Deleted element: ${deleteRandomNumber};`);
        spanForDeleteRandomNumber2.appendChild(textForArr5);
        console.log(`delete random number - ${deleteRandomNumber}`);
    })()
    :
    (function (){
        let spanForNotFound = document.createElement('span');
        newDiv.appendChild(spanForNotFound);
        spanForNotFound.style.display = 'flex';
        let textForArr6 = document.createTextNode(`5) Not found`);
        spanForNotFound.appendChild(textForArr6);
        console.log('not found');
    })();
