// Our Admin Reunification controller
// ==================================
// This file uses Sequelize to manage data manipulation for all apropos http requests.

var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");


// get route -> index, edited to match sequelize
router.get("/admin_reunify", function(req, res) {

  // Find Checked in Parent and all students where 
  // the parent government ID matches in both tables (join on foreign key) and 
  // the student status is not equal to 'Released' and 
  // then order the list by parent_govt_id -- to get the list in student - parent order, 
  // as the parent that checked in can have more than one student to pick up.

  Students.hasMany(Checkin_parent,   {foreignKey: 'parent_govt_id'});
  Checkin_parent.belongsTo(Students, {foreignKey: 'parent_govt_id'});

  db.Checkin_parent.findAll({ 
    include: [db.Students],
    order: [
      ["parent_govt_id", "ASC"]
    ]
  });

  // use promise method to pass joined data...
  .then(function(dbReunify) {
    // passing PUG object to the index file for updating the page
    var PugObject = {
      reunify: dbReunify
    };
    return res.render("index", PugObject);
  });
  console.log("admin_renify_find: ", dbReunify);
});


// post route -> index, to create final reunification and release record
router.post("/admin_reunify/create", function(req, res) {

  db.Release_stud.create({
        student_id: req.body.student_id,
    parent_govt_id: req.body.parent_govt_id
  })
  // pass the result of our call then update the student table column
  // field student-status to show the student has been 'Released' to their parent
  .then(function(dbRelease_stud) {
    return db.Students.update({
        student_status: 'Released'
      }, {
        where: {
          student_id: req.body.student_id
        }
      });
    .then(function(dbStudents) {
      res.redirect("/admin_reunify");  // redirect to obtain a new updated list to display to the DOM
    });
    // log the result to our terminal/bash window
    console.log("admin_reunify_create: ", dbRelease_stud);
    console.log("admin_reunify_create: ", dbStudents);
  });
});

module.exports = router;
