module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    StudentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    StudentName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    StudentPhoto: {
      type: DataTypes.STRING
    }, 
    GradeLevel: {
      type: DataTypes.INTEGER
    },
    HomeroomTeacher: {
      type: DataTypes.STRING
    },
    DriversID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    ParentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ParentName2: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });


  Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
