var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) { // a function which produces all the messages
      //define query
      var queryString = "select username,roomname,text,messageID as objectId " +
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
    post: function (toInsert, callback) {
      // insert user name placeholder
      

      var queryString = 'insert into messages values (0, (select userID from users where username = ?),(select roomID from rooms where roomname = ?), ?);';
      // [toInsert.username,toInsert.roomname,toInsert.text]
       db.query(queryString,[toInsert.username,toInsert.roomname,toInsert.text], function(err, results) {
         
         if (err) {
          callback(err);
         }  else {
          callback(null, results);
         }
   
       });

      

    } // a function which can be used to insert a message into the database
      

  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (userData, callback) {

      var queryString = 'insert into users values (0, ?);';

      db.query(queryString, [userData.username], function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })

    }
  }
};

