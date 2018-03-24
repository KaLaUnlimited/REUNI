var path = require('path');

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// bring in the models
var db = require("./models");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use('/assets', express.static(path.join(__dirname, 'assets')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// var routes1 = require("./controllers/students_controller");
// var routes2 = require("./controllers/checkin_parent_controller");
// var routes3 = require("./controllers/admin_students_controller");
// var routes4 = require("./controllers/admin_reunify_controller");
// var routes5 = require("./controllers/admin_parents_controller");


//dereks routes

// app.use("/", routes1);
// app.use("/update", routes1);
// app.use("/create", routes1);
//app.use("/checkin", routes);

// app.use("/", routes1);
// app.use("/students", routes1);
// app.use("/students/update", routes1);
// app.use("/students/reunify_point", routes1);

// app.use("/checkin_parent", routes2);
// app.use("/checkin_parent/create", routes2);

// app.use("/admin_students", routes3);

// app.use("/admin_reunify", routes4);
// app.use("/admin_reunify/create", routes4);

// app.use("/admin_parents", routes5);
app.use(require('./controllers/checkin_parent_controller'))
app.use(require('./controllers/students_controller'))
app.use(require('./controllers/view-routes'));
app.use(require('./controllers/admin_controller'));

// listen on port 3000
var port = process.env.PORT || 3000;
// db.sequelize.sync().then(function() {
// });
app.listen(port, function() {
  console.log('listening on port ' + port);
});