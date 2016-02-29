/* Google Map Initialization */
function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 37.756, lng: -122.431},
zoom: 12
});
};
/* End Google Map Initialization */

/* Map Slide down */
$(document).ready(function () {
  $('.map-button').click(function() {
    $('.main').animate({ top: '-600px' });
    $('.about-main').animate({ top: '-600px' });
    $('.contact-main').animate({ top: '-600px' });
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
    $('.search-result').slideDown("slow");
    $('.search-bar').slideUp("slow");
    $('.main').animate({ top: '-600px' });
    $('.about-main').animate({ top: '-600px' });
    $('.contact-main').animate({ top: '-600px' });
    $('#map').animate({ top: '-1200px' });
    $('.collapsed-search-bar').slideDown();
    var wkQuerry = "https://en.wikipedia.org/w/api.php?action=query&titles=" + searchRequest + "_Street&prop=revisions&rvprop=content&format=json"
    console.log(wkQuerry);

    $.ajax ({
       url: wkQuerry,
       jsonp: "callback",
       dataType: 'jsonp',
       data: {
         action: 'query',
         format: 'json',
       },
       xhrFields: {
           withCredentials: true
       },
       type: 'POST',
       headers: {
      'Access-Control-Allow-Origin': 'http://theumann.github.io',
      'origin': 'http://theumann.github.io',
      'Content-Type': 'application/json; charset=UTF-8'
      },
      origin: 'http://theumann.github.io',
       success: function(data) {
           var  pagesArray = Object.keys(data.query.pages);
           var src = data.query.pages[pagesArray[0]].revisions[0].contentmodel;
           console.log(src);
           $('.search-result').append (src);
       }
   });
  });
/* End Search box Submit handler */

/* Main Section Reset */
  $('.slide-button').click(function() {
    $('.search-result').slideUp();
    $('.main').animate({ top: '0' });
    $('.about-main').animate({ top: '0' });
    $('.contact-main').animate({ top: '0' });
    $('#map').animate({ top: '0' });
    $('.search-bar').slideDown("slow");
    $('.collapsed-search-bar').slideUp();
  });
/* End Main Section Reset */

});

/*TODO
P1
- Add map communication with wikipedia.
- Center map with precise lat/lng.
- Fix layout issues and links (Contact, About...)

P2
- Enable other 2 search methods.
- Add more than just wikipedia results. Images, upoming events (Yelp?), etc...

P3
- User registration / Login.
*/
