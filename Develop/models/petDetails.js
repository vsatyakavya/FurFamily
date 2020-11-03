
// Creating our pet model
module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define("Pet", {
    // The email cannot be null, and must be a proper email before creation{}
    petName :{
      type : DataTypes.STRING,
      allowNull:false,
      validate :{
        len : [1,15]
      }

    },
    petAge :{
      type : DataTypes.INTEGER,
      allowNull:false,
      validate :{
        len : [1,3]
      }

    },
    petBreed :{
        type : DataTypes.STRING,
        allowNull:false,
        validate :{
          len : [1,15]
        }
  
      }
  });

  return Pet;
};
