function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 37.8, lng: -122.6},
zoom: 12
});
};

/* Map Slide down / Slide up */
$(document).ready(function () {
  $('.map-button').click(function() {
    $('.main').slideUp();
    $('#map').slideDown("slow");
    $('.search-bar').slideUp("slow");
    $('.collapsed-search-bar').slideDown();
  });
  $('.slide-button').click(function() {
    $('.search-result').slideUp();
    $('#map').slideUp("slow");
    $('.search-bar').slideDown("slow");
    $('.collapsed-search-bar').slideUp();
    $('.main').slideDown();
  });
/* End Map Slide down / Slide up */

/* Search box Submit handler */
  $('.wiki-search').submit(function(evt) {
    evt.preventDefault();
    var searchRequest = $('.search-input').val();
    console.log(searchRequest);
    $('.search-result').append (searchRequest);
    $('.search-result').slideDown("slow");
    $('.search-bar').slideUp("slow");
    $('.main').slideUp();
    $('.collapsed-search-bar').slideDown();
    $('#map').slideUp("slow");
  });
/* End Search box Submit handler */

});


/*TODO
P1
- Fix map (only shows when toggling dev tools)
- Add text search results from wikipedia.
- Add map communication with wikipedia
- Fix layout issues and links

P2
- Enable other 2 search methods
- Add more than just wikipedia results. Images, upoming events (Yelp?), etc...
*/
