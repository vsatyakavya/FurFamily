
$(document).ready(function () {
     console.log("this file is active");
     let id;
     $.get("/api/user_data").then(function (data) {
          id = data.id;
          console.log("id is :" + data);
          passId(id);

     });
     const wellSection = $("#well-section");
     const text =$("#content");

     function passId(id) {
          console.log("id is" + id);
          $.get("api/yourPets/" + id).then(function (pets) {
                if(!pets.length){
                     text.css("display" ,"block" )
                }
                else{
                     text.css("display" , "none");
                    pets.forEach((pet, index) => {
                         wellSection.append(renderPet({ pet, index }));
                        
                    })
                     
                }
               
              
          })
     }

     function renderPet(props) {
          const { pet, index } = props;
          const { id ,petName, petAge, petBreed } = pet;
          return $(/*html*/`
       <div class="card-body justify-content-md-center" data-id=${id}>
       <ul style="  padding: 0; list-style-type: none;">
       <div class="card text-white bg-info mb-12 shadow-lg rounded " >
         <div class="card-body">
           
           <div class ="row">
           <div class ="col-md-2">
            <img src="./image/furfamily.jpg" alt="Pet Image" class="img-thumbnail" class="img-fluid" class="list-inline-item">

           </div>
           <div class = "col-md-8">
            <li class="list-inline-item" style="font-size:20px">Pet Name : ${petName}</li>
           <li class="list-inline-item" style="font-size:20px">Pet Age : ${petAge}</li>
           <li class="list-inline-item" style="font-size:20px">Pet Breed : ${petBreed}</li>
           </div>
           <div class ="col-md-2">
           <button class="btn btn-danger btn-sm" id="delete"  data-id = ${id}><span class="fas fa-trash-alt"></span> Delete Pet</button>
             </div>
         </div>
          </div>
           </div>
             </ul>
        
             </div> 
             `
            
               );
 }
     $(document).on("click","#delete", function(){
          var id;
       console.log("this is and id of petid" +id);

       id  = $(this).attr("data-id");
       console.log("this is and id of petid-----" +id);

       $.ajax({
            method: "DELETE",
            url: "/api/pets/" + id
          })
            // On success, run the following code
            .then(function() {
              console.log("Deleted Successfully!");
              window.location.reload("/yourpets");
            })
        
  })   

  

     // $.delete("/api/pets/:id").then(function(data){
     //      console.log(data);
     // })
          //  <img src="http://placehold.it/125x125" alt="Pet Image" class="img-thumbnail" class="img-fluid" class="list-inline-item">



});


