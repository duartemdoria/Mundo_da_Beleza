// Regular map
function initMap() {
    var var_location = new google.maps.LatLng(32.647937, -16.9130769);

    var var_mapoptions = {
        center: var_location,
        zoom: 17
    };

    var var_map = new google.maps.Map(document.getElementById("map"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Funchal"
    });

    var contentString = '<div class="info-window">' +
            '<h3>Mundo da Beleza</h3>' +
            '<div class="info-content">' +
            '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
            '</div>' +
            '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });

    var_marker.addListener('click', function () {
        infowindow.open(map, var_marker);
    });
}
