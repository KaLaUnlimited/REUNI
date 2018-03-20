
module.exports = function(sequelize, DataTypes) {
  var Checkin_parent = sequelize.define("Checkin_parent", {
    parent_govt_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: { 
        min: 100000000,
        max: 999999999
      }
    },
    parent_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time_stamp: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW  
    }
  });

  return Checkin_parent;
};

