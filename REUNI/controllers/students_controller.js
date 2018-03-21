// Our Students controller
// =====================
// This file uses Sequelize to manage data manipulation for all apropos http requests.
// NOTE: This is sequelize queries
// 
var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/students");
});

// get route, edited to match sequelize
router.get("/students", function(req, res) {
  // replace old function with sequelize function
  db.Students.findAll({
    where: {
      student_id: req.body.student_id
    },
  })
  // use promise method to pass the students...
  .then(function(dbStudents) {
    // into the main index, updating the page
    var hbsObject = {
      students: dbStudents
    };
    return res.render("index", hbsObject);
  });
});


// put route to update   
// Question - how do we do the reunify point logic???

router.put("/students/update", function(req, res) {
  
  if (req.body.student.status != 'Released' &&  (IsNullOrEmpty(req.body.reunify_pnt))) {
    db.Students.update({
      reunify_pnt: 'red',
      student_status: 'Received'
    })
    .then(function(dbStudents) {
      res.redirect("/");
    });
  }
 
});

module.exports = router;