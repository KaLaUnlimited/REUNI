var express = require('express');

var db = require('../models');
var router = express.Router();

router.get("/admin", function(req, res){
    db.Students.find({
        where: {
            student_name :req.body.student_name,
            student_id: req.body.student_id,
            par_name:req.body.par_name,
            par_gvt_id:req.body.par_gvt_id

        },
    })
    // use promise method to pass the students...
        .then(function(dbMatch) {
            console.log("student_find: ", dbMatch);
            return res.(dbMatch);
        });
})