function initMap() {
    var uluru = {lat: -25.363, lng: 131.1234};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: uluru,
        scrollwheel:false
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
