var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerReady = { burgers: data };
        res.render("index", burgerReady);
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function() {
        res.redirect("/");
    });
    console.log(res);
});

router.put("/burgers/update/:id", function(req, res) {
    burger.update(req.params.id, function() {
        res.redirect("/");
    });
});

module.exports = router;