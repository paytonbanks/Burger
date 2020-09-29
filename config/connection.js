var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user:"root",
        password: "",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("Connection Failure: " + err.stack);
        return;
    }
    console.log("Burger Connection as id " + connection.threadId);
});

module.exports = connection;