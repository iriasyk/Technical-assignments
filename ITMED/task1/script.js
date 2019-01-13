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

        let values = Array.from(inputElements)
            .map(input => input.value); //["1", "2", "3", "4", "5", "6"]

        let sortValues = values.sort(function (a,b) {
            return a - b;
        });

        let generalDiv = document.querySelector('.general');
        let newDiv = document.createElement("div");
        newDiv.classList.add("form-control");
        generalDiv.appendChild(newDiv);

        (function () {
            let spanForSort = document.createElement('span');
            newDiv.appendChild(spanForSort);
            spanForSort.style.display = 'flex';
            let textForSort = document.createTextNode(`1) The value is in the order of growth: ${sortValues};`);
            spanForSort.appendChild(textForSort);
        })();

        let sum = Array.from(inputElements)
            .map(value => +value.value)
            .filter(value => value % 2 === 0)
            .reduce((sum, value) => sum + value);

        (function () {
            let spanForSum = document.createElement('span');
            newDiv.appendChild(spanForSum);
            spanForSum.style.display = 'flex';
            let textForSum = document.createTextNode(`2) The sum of the numbers that turned out to be paired: ${sum};`);
            spanForSum.appendChild(textForSum);
        })();

        let maxValue = Math.max(...values);
        let minValue = Math.min(...values);

        (function () {
            let spanForMinMax = document.createElement('span');
            newDiv.appendChild(spanForMinMax);
            spanForMinMax.style.display = 'flex';
            let textForMinMax = document.createTextNode(`3) Max value = ${maxValue}; Min value = ${minValue};`);
            spanForMinMax.appendChild(textForMinMax);
        })();

        event.preventDefault();
    });

})();









