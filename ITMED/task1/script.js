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
        newDiv.style.marginTop = '10px';
        newDiv.style.display = 'block';
        newDiv.style.height = '100%';
        newDiv.style.width = '50%';
        generalDiv.appendChild(newDiv);

        let spanForSort = document.createElement('span');
        newDiv.appendChild(spanForSort);
        spanForSort.style.display = 'flex';
        let textForSort = document.createTextNode(`1) The value is in the order of growth: ${sortValues};`);
        spanForSort.appendChild(textForSort);

        let valuesPaired = Array.from(inputElements)
            .map(input => input.value % 2 == 0 ? input.value : 0); //[0, "2", 0, "4", 0, "6"]
        let valuesPairedJustNumber = valuesPaired.map(Number); // [0, 2, 0, 4, 0, 6]

        function sumValuesPaired(arrPaired){
            let emptySum = 0;
            for(let i = 0; i < arrPaired.length; i++){
                emptySum += arrPaired[i];
            }
            return emptySum;
        }

        let spanForSum = document.createElement('span');
        newDiv.appendChild(spanForSum);
        spanForSum.style.display = 'flex';
        let textForSum = document.createTextNode(`2) The sum of the values of paired positions in a sorted array: ${sumValuesPaired(valuesPairedJustNumber)};`);
        spanForSum.appendChild(textForSum);

        let maxValue = Math.max.apply(null, values);
        let minValue = Math.min.apply(null, values);

        let spanForMinMax = document.createElement('span');
        newDiv.appendChild(spanForMinMax);
        spanForMinMax.style.display = 'flex';
        let textForMinMax = document.createTextNode(`3) Max value = ${maxValue}; Min value = ${minValue};`);
        spanForMinMax.appendChild(textForMinMax);


        event.preventDefault();
    });

})();









