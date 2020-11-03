



$(document).ready(function() {
    petname,petage , petbreed
var pet = {
    petname: petname.val().trim(),
    petnAge: petname.val().trim(),

    petnBreed: petname.val().trim(),
    userId :userId,
      
    complete: false

  };
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    let userId;
    $.get("/api/user_data").then(function(data) {
         userId = data.id;
    //   console.log(data);
    //   $(".member-name").text(data.firstName);
    });

   $.post("/api/pets",pet).then(function(){

   })


  });   


