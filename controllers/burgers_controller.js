var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgersReady = { burgers: data };
        res.render("index", burgersReady);
    });
});

router.post("/burgers/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/");
    });
});

router.post("/burgers/devoured:id", function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect("/");
    });
});

module.exports = router;