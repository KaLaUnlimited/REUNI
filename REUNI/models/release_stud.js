var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Release_stud = sequelize.define("Release_stud", {
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: { 
        min: 100000000,
        max: 999999999
      }
    },
    parent_govt_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { 
        min: 100000000,
        max: 999999999
      }
    },
    time_stamp: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW  
    },
    {
    classMethods: {
      associate: function(models) {
        Student.hasOne(models.Parent);
      }
    }
  });

  return Release_stud;
};

