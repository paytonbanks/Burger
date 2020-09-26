var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);

        });
    },

    create: function(name, cb) {
        orm.create(name, function(res) {
            cb(res);
        });
    },

    update: function(newId, cb) {
        orm.update(newId, function(res) {
            cb(res);
        });
    },

};

module.exports = burger;

