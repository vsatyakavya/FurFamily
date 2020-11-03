// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
   app.post("/api/pets",function(req,res){
    db.Pet.create(req.body)
    .then(function(){
        // res.redirect(307 , "api/yourPets/:id")
    }).catch(function(err){
        res.status(401).json(err);
    })
  });


  app.get("/api/yourPets/:id",function(req,res){
    db.Pet.findAll({
      where :{
        userId :req.params.id
      }
    }).then(function(dbPet){
        res.json(dbPet)
    })
  })


  app.delete("/api/pets/:id", function(req, res){
    db.Pet.destroy({
      where :{
        id : req.params.id
      }
    }).then(function(dbPet){
      res.json(dbPet);
    })
  })
};




