/* function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {
        lat: 46.619261,
        lng: -33.134766
        }
        });
    return map;
};
*/

let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 51.86374135992957, lng: - 3.356298099532363 },
        zoom: 10,
    });

    let markerOptions = {
        position: new google.maps.LatLng(51.887444971775096, -3.437991156270883),

    }

    let marker = new google.maps.Marker(markerOptions)

    let markerOptions2 = {
        position: new google.maps.LatLng(51.83191313142389, -3.3833262431141287)
    }

    let marker2 = new google.maps.Marker(markerOptions2)

    marker.setMap(map);
    marker2.setMap(map);
}

initMap();

