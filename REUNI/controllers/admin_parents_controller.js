// Our Checkin_parent controller
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
  res.redirect("/admin_parents");
});

// get route, edited to match sequelize
router.get("/admin_parents", function(req, res) {
  
  db.Checkin_parent.findAll({
    // Here we specify we want to return our admin_parents in ordered by ascending Checkin_parent_timestamp
    order: [
      ["timestamp", "ASC"]
    ]
  })

  // ********** THIS PART WE NEED TO MODIFY FOR PUG *******

  // use promise method to pass the admin_parents...
  .then(function(dbCheckin_parent) {
    // using handlebars object into the main handlebars index file (INDEX.HANDLEBARS), updating the page
    var hbsObject = {
      Checkin_parent: dbCheckin_parent
    };
    return res.render("index", hbsObject);
  });
});

 // *******************************************************



module.exports = router;