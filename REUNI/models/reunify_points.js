
module.exports = function(sequelize, DataTypes) {
  var Runify_points = sequelize.define("Reunify_points", {
    reunify_point: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: { 
        len: [1]
      }
    },
    reunify_point_count: {
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
    }
  });

  return Reunify_points;
};
