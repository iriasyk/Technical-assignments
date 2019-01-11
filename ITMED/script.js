const inputElements = document.body.querySelector('.number');


inputElements.addEventListener("invalid", function () {

    if (this.validity.valueMissing) {
        this.setCustomValidity('Fill in the field!');
    }

});

inputElements.addEventListener('input', function () {

    let inputValue = inputElements.value;

    if(inputElements.validity.patternMismatch){
        this.setCustomValidity(`You entered: "${inputValue}". Input only natural number, please!`);
    } else{
        this.setCustomValidity('');
    }

});








