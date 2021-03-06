var express = require('express');

var db = require('../models');
const data = require("../seeds.json");
const faker = require("faker");

var router = express.Router();

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


router.post("/parent", function (req, res) {
    console.log(req.body);
    db.Students.findAll({
            where: {
                par_gvt_id: req.body.par_gvt_id
            },
        })
        // use promise method to pass the students...
        .then(function (dbStudents) {
            console.log("parents_find: ", dbStudents);

            // send students back as a JSON object
            res.json({
                par_name: dbStudents[0].par_name
            });
        });
});
router.post("/parents/checkin", function(req, res){
    db.Students.find({
        where: {
            par_gvt_id :req.body.par_gvt_id
        },
    })
    // use promise method to pass the students...
        .then(function(dbStudent) {
            console.log("Parent_find: ", dbStudent);
            return res.render("parent_result_modal", dbStudent.dataValues);
        });
})
db.sequelize.sync({force:true}).then(function () {
    insertStudentData();
    console.log("Data is synched and inserted to the database")
  })
module.exports = router;
