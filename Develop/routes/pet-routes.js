// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
   app.post("/api/pets",function(req,res){
    db.Pet.create(req.body)
    .then(function(){
        res.redirect(307 , "api/yourPets")
    }).catch(function(err){
        res.status(401).json(err);
    })
  });


  app.get("/api/yourPets/:id",function(req,res){
    db.pet.findAll({
      where :{
        userId :req.params.id
      }
    }).then(function(dbPet){
        res.json(dbPet)
    })
  })
};


