var models = require('../models');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
}

module.exports = {
  messages: {
    get: function (req, res) {



      models.messages.get(function(err, result) {
        headers['Content-Type'] = "application/json";
        res.writeHead(200, headers);
        res.end(JSON.stringify(result));
        //delete headers['Content-Type'];
      });


    }, // a function which handles a get request for all messages

    post: function (req, res) {

      models.messages.post(req.body, function(err, result) {
        headers['Content-Type'] = "text/html";
        res.writeHead(201, headers);
        res.end();   
      });
      
    } // a function which handles posting a message to the database
      


  },

  users: {
    // Ditto as above
    get: function (req, res) {


    },
    post: function (req, res) {
      
      models.users.post(req.body, function(err, result){
        headers['Content-Type'] = "text/html";
        res.writeHead(201, headers);
        res.end();
      });

    }
  }
};

