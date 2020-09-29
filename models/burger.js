var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.all(function(res) {
      cb(res);
    });
  },

  inesrtOne: function(name, cb) {
    orm.insertOne(name, function(res) {
      cb(res);
    });
  },

  updateOne: function(newID, cb) {
    orm.updateOne(newID, function(res) {
      cb(res);
    });
  }

};

module.exports = burger;

