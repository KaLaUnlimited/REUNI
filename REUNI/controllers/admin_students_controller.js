// Our Admin Students controller
// =============================
// This file uses Sequelize to manage data manipulation for all apropos http requests.

var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/admin_students");
});

// get route -> index, edited to match sequelize
router.get("/admin_students", function(req, res) {
  
  db.Students.findAll({
    where: {
      student_status: {[Op.ne]: 'Released'}
    },
    // Ordered by ascending reunification point, student status and timestamp
    order: [["reunify_pnt", "student_status", "timestamp", "ASC"]]
  })

  // use promise method to pass the students
  .then(function(dbStudents) {

    console.log("admin_students_find: ", dbStudents);

    // use Pug object for the Pug index file to update the page
    var PugObject = {
      students: dbStudents
    };
    return res.render("index", PugObject);
  });
});

 // *******************************************************

module.exports = router;