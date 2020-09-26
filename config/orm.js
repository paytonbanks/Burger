var connection = require("./connection.js");

var orm = {
    selectAll: function (cb) {
        connection.query('SELECT * FROM burgers', (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    create: function (name, cb) {
        connection.query('INSERT INTO burgers SET ?', {
          burger_name: name,
          devoured: false
        }, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

    update: function (newId, cb) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: newId}], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

};

module.exports = orm;