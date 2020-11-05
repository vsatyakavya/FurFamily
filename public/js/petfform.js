
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
      console.log("this is data"+data);
      
      // window.location.replace("/yourpets");
      window.location.href = "/yourpets";
  });
 

  $("#petName").val("");
  $("#petAge").val("");
  $("#petBreed").val("");
  }

 


  



});






