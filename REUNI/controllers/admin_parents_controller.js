// Our Admin Parent controller
// ============================
// This file uses Sequelize to manage data manipulation for all apropos http requests.

var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");


// get route -> index, edited to match sequelize
router.get("/admin_parents", function(req, res) {
  
  db.Checkin_parent.findAll({
    // Here we specify we want to return our admin_parents ordered by ascending check-in timestamp
    order: [
      ["timestamp", "ASC"]
    ]
  })

  // use promise method to pass the parent name object...
  .then(function(dbCheckin_parent) {

    console.log("admin_parents_find: ", dbCheckin_parent);
    
    // passing PUG object to the index file for updating the page
    var PugObject = {
      checkin_parent: dbCheckin_parent
    };
    return res.render("index", PugObject);
  });
});

module.exports = router;