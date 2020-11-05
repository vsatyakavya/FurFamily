$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.firstName);
  });

  //AJAX call for the dog of the day card
  $.ajax({
    url: "https://api.thedogapi.com/v1/images/search/",
    method: "GET"

  }).then(function (response) {
    console.log(response)
    $('#dogName').text(response[0].breeds[0].name)
    $('#origin').text(response[0].breeds[0].origin)
    $('#dogTemperment').text(response[0].breeds[0].temperament)
    $('#lifeSpan').text(response[0].breeds[0].life_span)
    $('#breedGroup').text(response[0].breeds[0].breed_group)
    $('#dogImage').append("<img src='" + response[0].url + 
    "'style=height:200px;width:200px;border-radius:15px;margin:10px>")
  });




  //Persisting checkboxes in daily dog checklist
  const checkboxValues = 
  JSON.parse(localStorage.getItem('checkboxValues')) || {},
    $checkboxes = $("#checklistCard :checkbox");

    $checkboxes.on("change", function(){
      $checkboxes.each(function(){
        checkboxValues[this.id] =
        this.checked;
      });

      localStorage.setItem("checkboxValues",
      JSON.stringify(checkboxValues));
    });

    $.each(checkboxValues, function(key, value){
      $("#" + key).prop('checked', value);
    });





//Ajax call for quote API
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

//Randomly generated Quote Card
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    const data = JSON.parse(response);
    var randomnumber = Math.floor(Math.random() * (98 + 1));
    console.log(data)
    $("#quote").text(data[randomnumber].text);
  });
});
});

