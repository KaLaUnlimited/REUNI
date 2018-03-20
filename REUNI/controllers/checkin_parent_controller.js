// Our checkin_parent controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.

var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/checkin_parent");
});

// get route, edited to match sequelize
// Does a lookup on the Student table to find and return the Parent name and students associated with that parent id
// Question: should this be "checkin_parent:govt_id_entered? and use this in the where clause?

router.get("/checkin_parent", function(req, res) {

  db.Students.findAll({
    where: { 
      parent_govt_id: req.body.parent_govt_id,
      student_status: {[Op.ne]: 'Released'}
    }
  })
  // use promise method to pass the students...
  .then(function(dbStudents) {
    // into the main index, updating the page
    var hbsObject = {
      students: dbStudents
    };
    return res.render("index", hbsObject);
  });
});

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
    console.log(dbCheckin_parent);
    // redirect
    res.redirect("/");
  });
});

module.exports = router;
