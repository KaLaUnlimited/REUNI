// Our Students controller
// =======================
// This file uses Sequelize to manage data manipulation for all apropos http requests.
 
var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/students");
});



// get route -> index, edited to match sequelize

router.get("/students", function(req, res) {
  db.Students.findAll({
    where: {
      student_id = req.body.student_id
    },
  })
  // use promise method to pass the students...
  .then(function(dbStudents) {

    console.log("students_find: ", dbStudents);

    // into the main index, updating the page
    var PugObject = {
      students: dbStudents
    };
    return res.render("index", PugObject);
  });
});


// get route -> index, edited to match sequelize
router.get("/students/reunify_point", function(req, res) {
  db.Reunify_points.findOne({
    where: {
      reunify_point_count: {[Op.lt]: 20}
    },
  })
  // use promise method to pass the students...
  .then(function(dbReunify_points) {



router.get("/checkin", function(req, res) {


    console.log("students_reunify_point_find: ", dbReunify_points);

    // into the main index, updating the page
    var PugObject = {
      reunify_point: dbReunify_points
    };
    return res.render("index", PugObject);
  });
});


// put route to update   

    return res.render("parent", {title: "Parent"});
});
router.get("/admin", function(req, res) {

    return res.render("admin", {title: "Admin"});
});
router.get("/result", function(req, res) {

    return res.render("result", {title: "Results"});
});
router.get("/index", function(req, res) {


    return res.render("index", {title: "index"});
});
router.put("/students/update", function(req, res) {
  
  if (req.body.student.status != 'Released' &&  ([string]::IsNullOrEmpty(req.body.reunify_pnt))) {    

    db.Reunify_points.update({
      reunify_point_count++
      where: {
        reunify_point: req.body.reunify_point
      },
    })

    }
    .then(function(dbReunify_points) {

      console.log("student_update_reunify_point: ", dbReunify_points);

      return db.Students.update({
        reunify_pnt: req.body.reunify_point,
        student_status = 'Received'
      })
    .then(function(dbStudents) {
      res.redirect("/students");
    });
  }
});

module.exports = router;

