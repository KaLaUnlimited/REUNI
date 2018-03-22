
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define("Students", {
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      validate: { 
        min: 100000000,
        max: 999999999
      }
    },
    student_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    student_photo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grade_level: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parent_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parent_addr: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parent_csz: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parent_govt_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { 
        min: 100000000,
        max: 999999999
      }
    },
    reunify_pnt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    student_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time_stamp: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW  
    },
    {
    classMethods: {
      associate: function(models) {
        Student.hasOne(models.Checkin_parent);
      }
    }
  });

  return Students;
};

