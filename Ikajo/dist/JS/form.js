// function showError(container, errorMessage) {
//     container.className = 'error';
//     var msgElem = document.createElement('span');
//     msgElem.className = "error-message";
//     msgElem.innerHTML = errorMessage;
//     container.appendChild(msgElem);
// }
//
// function resetError(container) {
//     container.className = '';
//     if (container.lastChild.className == "error-message") {
//         container.removeChild(container.lastChild);
//     }
// }
//
// function validate(form) {
//     var elems = form.elements;
//
//     resetError(elems.from.parentNode);
//     if (!elems.from.value) {
//         showError(elems.from.parentNode, ' Укажите от кого.');
//     }
//
//     resetError(elems.email.parentNode);
//     if (!elems.email.value) {
//         showError(elems.email.parentNode, ' Укажите емейл.');
//     }
//
//     resetError(elems.message.parentNode);
//     if (!elems.message.value) {
//         showError(elems.message.parentNode, ' Отсутствует текст.');
//     }
// }
// class Validate {
//     constructor({ form }) {
//         this.form = form;

//         this.form.addEventListener("click", event => {
//             if (event.target.name === "check") this.validate();
//         });
//     }

//     validate() {
//         this._reset();
//         this._validateFields({
//             fields: [
//                 this.form.from, // первое проверяемое поле
//                 this.form.email,
//                 this.form.message
//             ],
//             conditions: [
//                 this.form.from.value, // условие для проверки первого поля
//                 this.form.email.value,
//                 this.form.message.value
//             ],
//             errorTexts: [
//                 "", // текст ошибки для первого поля
//                 "",
//                 ""
//             ],
//             successTexts: [
//                 "", // текст успешной проверки для первого поля
//                 "",
//                 ""
//             ]
//         });
//     }

//     _validateFields({ fields, conditions, errorTexts, successTexts }) {
//         let validate = [];
//         for (let i = 0; i < conditions.length; i++) {
//             if (!conditions[i]) {
//                 fields[i].classList.add("errorElement");
//                 this._errorText(fields[i], errorTexts[i]);
//                 validate.push(false);
//                 continue;
//             }
//             fields[i].classList.add("successElement");
//             this._successText(fields[i], successTexts[i]);
//             validate.push(true);
//         }
//         validate.includes(false)
//             ? this._errorText(this.form.check, " The form is not ready to be sent. ")
//             : this._successText(this.form.check, " The form is ready to be sent. ");
//     }

//     _reset() {
//         let elements = this.form.elements;
//         for (let elem of elements) {
//             if (
//                 elem.classList.contains("errorElement") ||
//                 elem.classList.contains("successElement")
//             ) {
//                 elem.classList.remove("errorElement");
//                 elem.classList.remove("successElement");
//             }
//         }
//         let texts = this.form.querySelectorAll(
//             "[data-error-text], [data-success-text]"
//         );
//         for (let text of texts) {
//             text.remove();
//             text = null;
//         }
//     }

//     _errorText(elem, text) {
//         let errorText = document.createElement("span");
//         errorText.setAttribute("data-error-text", text);
//         errorText.classList.add("errorText");
//         errorText.append(errorText.dataset.errorText);
//         elem.insertAdjacentElement("afterEnd", errorText);
//     }

//     _successText(elem, text) {
//         let successText = document.createElement("span");
//         successText.setAttribute("data-success-text", text);
//         successText.classList.add("successText");
//         successText.append(successText.dataset.successText);
//         elem.insertAdjacentElement("afterEnd", successText);
//     }

// }
// console.log(document.forms[0]);
// let validate = new Validate({
//     form: document.forms[0]
// });
