var express = require('express');

var db = require('../models');
var router = express.Router();

router.get("/api/admin/getAll", function (req, res) {
    db.Students.findAll({
        where: {
            parent_status:"CHECKED",
            student_status :"CHECKED"
            
        },
    })
        // use promise method to pass the students...
        .then(function (dbMatch) {
            console.log("student_find: ", dbMatch);
            return res.json(dbMatch.map(e => ({
                student_name: e.student_name,
                student_id: e.student_id,
                par_name: e.par_name,
                par_gvt_id: e.par_gvt_id

            })));
        });
})

module.exports = router;