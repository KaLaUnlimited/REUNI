// Our Parent Check-in controller
// ==============================
// This file uses Sequelize to manage data manipulation for all apropos http requests.

var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");


// get route -> index, does a lookup on the Student table to find and return 
// the student row which will include the Parent name and students associated with that parent id

router.get("/checkin_parent", function(req, res) {

  db.Students.findAll({
    where: { 
      parent_govt_id: req.body.parent_govt_id
    }
  })
  // use promise method to pass the students...
  .then(function(dbStudents) {

    console.log("checkin_parent_find: ", dbStudents);

    // into the main index, updating the page
    var PugObject = {
          students: dbStudents
    };
    return res.render("index", PugObject);
  });
});

router.post("/parents/checkin", function(req, res){
    db.Students.find({

        where: {
            parent_govt_id :req.body.id
        },
    })
    // use promise method to pass the students...
        .then(function(dbStudent) {

            console.log("parent_find: ", dbStudent);

            return res.render("parent_result_modal", dbStudent);
        });

})

// post route to create checkin_parents
router.post("/checkin_parent/create", function(req, res) {
  // edited checkin_parent create to add in a checkin_parent_name
  db.Checkin_parent.create({
    parent_govt_id: req.body.parent_govt_id,
       parent_name: req.body.parent_name
  })
  // pass the result of our call
  .then(function(dbCheckin_parent) {

    // log the result to our terminal/bash window
    console.log("checkin_parent_create: ", dbCheckin_parent);
    // redirect
    res.redirect("/checkin_parent");
  });
});

module.exports = router;
