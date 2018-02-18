/* Map */
function initMap() {
    var uluru = {lat: 50.289079396765445, lng: 22.135047912597656};
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}