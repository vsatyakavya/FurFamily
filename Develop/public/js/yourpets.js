
$(document).ready(function() {
 let id;
 $.get("/api/user_data").then(function(data) {
      id = data.id;
 //   console.log(data);
 //   $(".member-name").text(data.firstName);
 });$.get("api/yourPets"+id).then(function(data){
     
 })
});