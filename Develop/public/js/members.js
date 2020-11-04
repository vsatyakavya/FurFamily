$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.firstName);
  });

  
  $.ajax({
    url: "https://api.thedogapi.com/v1/images/search/",
    method: "GET"

  }).then(function (response) {
    console.log(response)
    $('#dogName').text(response[0].breeds[0].name)
    $('#origin').text(response[0].breeds[0].origin)
    $('#dogTemperment').text(response[0].breeds[0].temperament)
    $('#lifeSpan').text(response[0].breeds[0].life_span)

  });

var unirest = require("unirest");

var req = unirest("GET", "https://healthruwords.p.rapidapi.com/v1/quotes/");

req.query({
	"id": "731",
	"t": "Wisdom",
	"maxR": "1",
	"size": "medium"
});

req.headers({
	"x-rapidapi-host": "healthruwords.p.rapidapi.com",
	"x-rapidapi-key": "cdb41f041dmsh90d1d3cefd5ceaep123b31jsn60b2cf4cb632",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
}).then(function (response){
  console.log(response)
  // $("#quote")
})
  


});
