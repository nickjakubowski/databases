var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) { // a function which produces all the messages
      //define query
      var queryString = "select username,roomname,text,messageID " +
        "from messages m inner join " +
        "users u on ( m.userID = u.userID ) inner join " +
        "rooms r on ( m.roomID = r.roomID );";
      var queryArgs = [];
      db.query(queryString, queryArgs, function(err, results) {
      //send query to database
        if (err) {
          callback(err);
        } else {
          callback(null, { results: results } );
        }  
      });

    },
    post: function (toInsert) {
      // insert user name placeholder
      
      var parsedToInsert = JSON.parse(toInsert);

      var userQuery = 'select userID from users where username = ' + parsedToInsert.username + ';';

      var roomQuery = 'select roomID from rooms where roomname = ' + parsedToInsert.roomname + ';'; 

      var insertMessage = 'insert into messages values (0, userID, roomID, text)';//TO DO
      


    } // a function which can be used to insert a message into the database
      

  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

