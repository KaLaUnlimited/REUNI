// Our Students controller
// =======================
// This file uses Sequelize to manage data manipulation for all apropos http requests.
 
var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");
var body= require("body-parser");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/students");
});



// get route -> index, edited to match sequelize
//this get method is for the modal
router.get("/students", function(req, res) {
  db.Students.findAll({
    where: {
      student_id :req.body.student_id
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











router.put("/students/update", function(req, res) {
  

     db.Students.update({
      
      student_status : 'CHECKED'
    })

    
    .then(function(dbReunify_points) {

      console.log("student_update_reunify_point: ", dbReunify_points);

      
    
      res.redirect("/");
   
  });
});

module.exports = router;

