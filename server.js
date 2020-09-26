var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

var PORT = process.env.PORT || 8080;
var app = express();

// Static Content | Public Directory \\
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars \\
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// enRoute Server connection \\
app.use(routes);

app.listen(PORT, function() {
    console.log("Burger Seerver Ready!: http://localhost:" + PORT);
});    


