function addEvent(node, type, callback) {
    if (node.addEventListener) {
        node.addEventListener(type, function(e) {
            callback(e, e.target);
        }, false);
    } else if (node.attachEvent) {
        node.attachEvent('on' + type, function(e) {
            callback(e, e.srcElement);
        });
    }
}

// функция для определения того, должно ли данное поле быть проверенным(проверка поля, на то, что оно (не) отключено + (не) читается,
// и на то, что у него есть либо атрибут pattern либо required)
function shouldBeValidated(field) {
    return (
        !(field.getAttribute("readonly") || field.getAttribute("readonly")) &&
        !(field.getAttribute("disabled") || field.getAttribute("disabled")) &&
        (field.getAttribute("pattern") || field.getAttribute("required"))
    );
}

// основная функция проверки, которая проверяет поле и затем выполняет фактическую проверку
function instantValidation(field) {
    if (shouldBeValidated(field)) {
        let invalid =
            (field.getAttribute("required") && !field.value) ||
            (field.getAttribute("pattern") &&
                field.value &&
                !new RegExp(field.getAttribute("pattern")).test(field.value));
        if (!invalid && field.getAttribute("aria-invalid")) {
            field.removeAttribute("aria-invalid");
        } else if (invalid && !field.getAttribute("aria-invalid")) {
            field.setAttribute("aria-invalid", "true");
        }
    }
}

//привязка функции проверки к onchange - событию
addEvent(document, "change", function(e, target) {
    instantValidation(target);
});

//делегирование для "onchange"
var fields = [
    document.getElementsByTagName("input")
];
for (let a = fields.length, i = 0; i < a; i++) {
    for (let b = fields[i].length, j = 0; j < b; j++) {
        addEvent(fields[i][j], "change", function(e, target) {
            instantValidation(target);
        });
    }
}


