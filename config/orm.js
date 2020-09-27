var connection = require("./connection");

var orm = {
    all: function(cb) {
        connection.query('SELECT * FROM ??', [burgers], function(err, result) {
            if (err) throw err;
            console.log(burgers);
            cb(res);
        });
    },

    create: function(name, cb) {
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: name,
            devoured: false
        },
            function (err, res) {    
                if (err) throw err;
                cb(res);
            });
    },

    update: function(newId, cb) {
        connection.query('UPDATE burgers SET ? WHERE ?', [req.body.burgers], 
        function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }

};

module.exports = orm;