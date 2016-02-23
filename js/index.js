/* Google Map Initialization */
function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 37.8, lng: -122.6},
zoom: 12
});
};
/* End Google Map Initialization */

/* Map Slide down */
$(document).ready(function () {
  $('.map-button').click(function() {
    $('.main').animate({ top: '-600px' });
    $('#map').animate({ top: '-600px' });
    $('.search-bar').slideUp("slow");
    $('.collapsed-search-bar').slideDown();
  });
/* End Map Slide down */

/* Search box Submit handler */
  $('.wiki-search').submit(function(evt) {
    evt.preventDefault();
    var searchRequest = $('.search-input').val();
    console.log(searchRequest);
    var wkQuerry = "https://en.wikipedia.org/w/api.php?action=query&titles=" + searchRequest + "_Street&prop=revisions&rvprop=content&format=json"
    console.log(wkQuerry)
    $('.search-result').append (searchRequest);
    $('.search-result').slideDown("slow");
    $('.search-bar').slideUp("slow");
    $('.main').animate({ top: '-600px' });
    $('#map').animate({ top: '-1200px' });
    $('.collapsed-search-bar').slideDown();
    $.ajax({
      url: wkQuerry,
      action: 'query',
      dataType: 'json',
      type: 'POST',
      headers: { 'Api-User-Agent': 'SF Streets - https://github.com/theumann/theumann.github.io.git' },
    });
  });
/* End Search box Submit handler */

/* Main Section Reset */
  $('.slide-button').click(function() {
    $('.search-result').slideUp();
    $('.main').animate({ top: '0' });
    $('#map').animate({ top: '0' });
    $('.search-bar').slideDown("slow");
    $('.collapsed-search-bar').slideUp();
  });
/* End Main Section Reset */

});

/*TODO
P1
- Fix map (only shows when toggling dev tools)
- Add text search results from wikipedia.
- Add map communication with wikipedia.
- Center map with precise lat/lng.
- Fix layout issues and links (Contact, About...)

P2
- Enable other 2 search methods.
- Add more than just wikipedia results. Images, upoming events (Yelp?), etc...

P3
- User registration / Login.
*/
