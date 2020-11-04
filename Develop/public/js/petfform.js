
$("#submit").on("click", function(event){
  event.preventDefault();
  let userId;
  $.get("/api/user_data").then(function(data) {
       userId = data.id;
    console.log(data);
    passid(userId);
  //   $(".member-name").text(data.firstName);
  });
  function passid(userId){
    const newPet ={
      petName : $("#petName").val().trim(),
      petAge :$("#petAge").val().trim(),
      petBreed : $("#petBreed").val().trim(),
      UserId : userId

  }
  console.log(newPet);
  $.post("/api/pets",newPet)
  .then(data=>{
      console.log(data);
      alert("adding new pet")
      // window.location.reload("/yourpets");
  });
 

  $("#petName").val("");
  $("#petAge").val("");
  $("#petBreed").val("");
  }

 


  



});






