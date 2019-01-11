'use strict';

let inputElements = document.querySelectorAll('.number');
let formElement = document.querySelector('#form');

(function validationForm() {

    for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].addEventListener("invalid", function (event) {

            let target = event.target;
            if (target.validity.valueMissing) {
                target.setCustomValidity('Field required for conscription!');
            }
        });

        inputElements[i].addEventListener('input', function () {

            let inputValue = inputElements[i].value;

            if (inputElements[i].validity.patternMismatch) {
                this.setCustomValidity(`You entered: "${inputValue}". Input only natural number, please!`);
            } else {
                this.setCustomValidity('');
            }
        });
    }

    formElement.addEventListener('submit', function (event) {
        for(let j = 0; j < 6; j++){
            let inputValue = [inputElements[j].value];
            // console.log(inputValue); //6 input value

            let newInputValueAll = [].push(inputValue);
            console.log(newInputValueAll);
        }
        // let generalDiv = document.querySelector('.general');
        // let newDiv = document.createElement("div");
        // generalDiv.appendChild(newDiv);
        //
        // let newText = document.createElement('span');
        //
        // let text = document.createTextNode(`The value is in the order of growth: `);
        // newText.appendChild(text);
        // newDiv.appendChild(newText);
        event.preventDefault();
    });

})();









