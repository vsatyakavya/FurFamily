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

