var express = require('express');

var db = require('../models');

var router = express.Router();


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
});
router.post("/students/checkin", function(req, res){
    db.Students.find({
        where: {
            student_id :req.body.id
        },
    })
    // use promise method to pass the students...
        .then(function(dbStudent) {
            console.log("student_find: ", dbStudent);
            return res.render("student_result_modal", dbStudent.dataValues);
        });
})
insertStudentData();
db.sequelize.sync({}).then(function () {

    console.log("Data is synched and inserted to the database")
  })
module.exports = router;
