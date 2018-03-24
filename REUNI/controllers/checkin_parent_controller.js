var express = require('express');


var router = express.Router();

function insertStudentData () {
 

 



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

module.exports = router;
