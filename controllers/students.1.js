var express = require('express');

var db = require('../models');

var router = express.Router();

router.post("/api/parents", function (req, res) {
    db.Students.findAll({
            where: {
                par_govt_id: req.body.id
            },
        })
        // use promise method to pass the students...
        .then(function (dbStudents) {
            console.log("students_find: ", dbStudents);

            // send students back as a JSON object
            res.json(dbStudents);
        });
});

module.exports = router;
