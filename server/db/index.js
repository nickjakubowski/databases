var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// module.exports = function() {
//   // creates connection
//   var dbConnection = mysql.createConnection({
//     user: "root",
//     password: "",
//     database: "chat"
//   });

//   // connects to db
//   dbConnection.connect();
  
// }

module.exports = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});






// module.exports.dbConnection = dbConnection;