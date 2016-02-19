function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 37.771, lng: -122.439},
zoom: 12
});
};

$(document).ready(function () {

  $('.map-button').click(function() {
    $('.main').slideUp();
    $('#map').slideDown("slow");
    $('.search-bar').slideUp("slow");
    $('.collapsed-search-bar').slideDown();
  });

  $('.slide-button').click(function() {
    $('#map').slideUp("slow");
    $('.search-bar').slideDown("slow");
    $('.collapsed-search-bar').slideUp();
    $('.main').slideDown();
  });


});
