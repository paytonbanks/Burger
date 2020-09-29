const express = require("express");
var exphbs = require("express-handlebars");
// cont mysql = require('mysql');
var routes = require("./controllers/burgers_controller.js");


const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("index", {layout:"main"});
});
app.use(routes);

app.listen(PORT, () => {
    console.log("Burger Server Ready!: http://localhost:" + PORT);
});    


