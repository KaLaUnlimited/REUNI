// Our reunification controller
// =============================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.

var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/admin_reunify");
});

// get route, edited to match sequelize
router.get("/admin_reunify", function(req, res) {

  // Find all students with a least one check_in_parent where 
  // check_in_parent.parent_govt_id === students.parent_govt_id
  // order by parent_govt_id, as we want to list all students whose parents have checked in

  db.Students.findAll({
      include: [{
          model: db.Checkin_parent,
          where: { parent_govt_id: Sequelize.col('db.Students.parent_govt_id'),
                   student_status: {[Op.ne]: 'Released'} },
          order: sequelize.col('parent_govt_id')
      }]
  })

  // ********** THIS PART WE NEED TO MODIFY FOR PUG *******

  // use promise method to pass the admin_reunify...
  .then(function(dbStudents) {
    // using handlebars object into the main handlebars index file (INDEX.HANDLEBARS), updating the page
    var hbsObject = {
      Students: dbStudents
    };
    return res.render("index", hbsObject);
  });
});

 // *******************************************************


// post route to create reunify
router.post("/admin_reunify/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.Release_stud.create({
    student_id: req.body.student_id;
    parent_govt_id: req.body.parent_govt_id
  })
  // pass the result of our call
  .then(function(dbRelease_stud) {
    return db.Students.update({
        student_status: 'Released'
      }, {
        where: {
          student_id: req.body.student_id
        }
      });
    .then(function(dbStudents) {
      res.redirect("/");
    });

    // log the result to our terminal/bash window
    console.log(dbRelease_stud);
  });
});

module.exports = router;
