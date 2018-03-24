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




<<<<<<< HEAD
var db = require('../models');
const data = require("../seeds.json");
const faker = require("faker");

function insertStudentData () {
 

 

    for(var i = 0; i <data.length; i ++){
      db.Students.create({
        student_id:data[i].student_id,
        student_name: data[i].student_name,
        student_photo:faker.image.avatar(),
        grade_level: data[i].grade_level,
        par_name:data[i].par_name,
        par_addr:data[i].par_addr,
        par_csz: data[i].par_csz,
        par_gvt_id:data[i].par_gvt_id,
        student_status: data[i].student_status,
        parent_status:data[i].parent_status,
        united_status :data[i].united_status
      })
      .then(function(){
        console.log("Yupeee!!");
      })
      .catch(function(err){
        console.log("Errors: ", err);
        
      });
    }
  }


router.post("/api/students", function (req, res) {
    db.Students.findAll({
            where: {
                student_id: req.body.id
            },
        })
        // use promise method to pass the students...
        .then(function (dbStudents) {
            console.log("students_find: ", dbStudents);

            // send students back as a JSON object
            res.json(dbStudents);
        });
=======







router.put("/students/update", function(req, res) {
  

     db.Students.update({
      
      student_status : 'CHECKED'
    })

    
    .then(function(dbReunify_points) {

      console.log("student_update_reunify_point: ", dbReunify_points);

      
    
      res.redirect("/");
   
  });
>>>>>>> parent of c58182e... cleaned up files
});

db.sequelize.sync({force:true}).then(function () {
    insertStudentData();
    console.log("Data is synched and inserted to the database")
  })
module.exports = router;

