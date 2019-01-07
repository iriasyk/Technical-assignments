function initMap(){
    var pos = {lat: 22.299341, lng: 114.172933};
    var opt = {
        center : {lat: 22.212538, lng: 114.197019},
        zoom: 11,
        styles: [{
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#f7f28b'}]
        }]
    };

    var myMap = new google.maps.Map(document.getElementById("map"), opt);

    var marker = new google.maps.Marker({
        map: myMap,
        position: pos,
        title: 'You put a marker on!',
    });

    var info = new google.maps.InfoWindow({
        content: "<h1>Чимсанчей</h1><p>Гонконг</p>"
    });
    marker.addListener("click", function () {
        info.open(myMap, marker);
    });
}

(function() {
    'use strict';

    var btnScrollDown = document.querySelector('#scroll_down');

    function scrollDown() {
        var windowCoords = document.documentElement.clientHeight;
        (function scroll() {
            if (window.pageYOffset < windowCoords) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 0);
            }
            if (window.pageYOffset > windowCoords) {
                window.scrollTo(0, windowCoords);
            }
        })();
    }

    btnScrollDown.addEventListener('click', scrollDown);
})();

//form:
// function addEvent(node, type, callback) {
//     if (node.addEventListener) {
//         node.addEventListener(type, function(e) {
//             callback(e, e.target);
//         }, false);
//     } else if (node.attachEvent) {
//         node.attachEvent('on' + type, function(e) {
//             callback(e, e.srcElement);
//         });
//     }
// }

// функция для определения того, должно ли данное поле быть проверенным(проверка поля, на то, что оно (не) отключено + (не) читается,
// и на то, что у него есть либо атрибут pattern либо required)

// function shouldBeValidated(field) {
//     return (
//         !(field.getAttribute("readonly") || field.getAttribute("readonly")) &&
//         !(field.getAttribute("disabled") || field.getAttribute("disabled")) &&
//         (field.getAttribute("pattern") || field.getAttribute("required"))
//     );
// }

// основная функция проверки, которая проверяет поле и затем выполняет фактическую проверку

// function instantValidation(field) {
//     if (shouldBeValidated(field)) {
//         let invalid =
//             (field.getAttribute("required") && !field.value) ||
//             (field.getAttribute("pattern") &&
//                 field.value &&
//                 !new RegExp(field.getAttribute("pattern")).test(field.value));
//         if (!invalid && field.getAttribute("aria-invalid")) {
//             field.removeAttribute("aria-invalid");
//         } else if (invalid && !field.getAttribute("aria-invalid")) {
//             field.setAttribute("aria-invalid", "true");
//         }
//     }
// }

//привязка функции проверки к onchange - событию

// addEvent(document, "change", function(e, target) {
//     instantValidation(target);
// });

//делегирование для "onchange"

// var fields = [
//     document.getElementsByTagName("input")
// ];
// for (let a = fields.length, i = 0; i < a; i++) {
//     for (let b = fields[i].length, j = 0; j < b; j++) {
//         addEvent(fields[i][j], "change", function(e, target) {
//             instantValidation(target);
//         });
//     }
// }
