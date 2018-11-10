function initMap(){
    var pos = {lat: 50.448583, lng: 30.450981};
    var opt = {
        center : {lat: 50.448971, lng: 30.457222},
        zoom: 16,
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
        icon: ("../img/Marker-icon.png")
    });

    var info = new google.maps.InfoWindow({
        content: "<h1>Chummery #15 NTUU KPI</h1><p>Description</p>"
    });
    marker.addListener("click", function () {
        info.open(myMap, marker);
    });
}