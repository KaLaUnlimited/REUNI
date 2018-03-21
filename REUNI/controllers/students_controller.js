
var express = require("express");

var router = express.Router();

var db = require("../models");


router.get("/", function(req, res) {

  res.redirect("/students");
});


router.get("/students", function(req, res) {

  db.Students.findAll({
    where: {
      student_id: req.body.student_id
    },
  })

  .then(function(dbStudents) {

    var hbsObject = {
      students: dbStudents
    };
    return res.render("index", hbsObject);
  });
});

router.get("/checkin", function(req, res) {

    return res.render("checkin", {title: "Check-in"});
});
router.get("/student", function(req, res) {

    return res.render("student", {title: "Student"});
});
router.get("/parent", function(req, res) {

    return res.render("parent", {title: "Parent"});
});

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