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

