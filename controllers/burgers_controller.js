var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerReady = { burgers: data };
        res.render("index", burgerReady);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        res.redirect("/");
       }
    );
});

module.exports = router;