// Our students controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.

var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/admin_students");
});

// get route, edited to match sequelize
router.get("/admin_students", function(req, res) {
  
  db.Students.findAll({
    where: {
      student_status: {[Op.ne]: 'Released'}
    },
    // Here we specify we want to return our admin_students in ordered by ascending reunification point, student status and students_timestamp
    order: [["reunify_pnt", "student_status", "timestamp", "ASC"]]
  })

  // ********** THIS PART WE NEED TO MODIFY FOR PUG *******

  // use promise method to pass the admin_students...
  .then(function(dbStudents) {
    // using handlebars object into the main handlebars index file (INDEX.HANDLEBARS), updating the page
    var hbsObject = {
      Students: dbStudents
    };
    return res.render("index", hbsObject);
  });
});

 // *******************************************************

module.exports = router;