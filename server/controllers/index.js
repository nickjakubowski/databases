var models = require('../models');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  "Content-Type": "application/json"
}

module.exports = {
  messages: {
    get: function (req, res) {



      models.messages.get(function(err, result) {

        res.writeHead(200, headers);
        res.end(JSON.stringify(result));
      });


    }, // a function which handles a get request for all messages

    post: function (req, res) {

      console.log('entered post');

      req.setEncoding('utf8');
      console.log(req.body);
      models.messages.post(req.body);
      res.writeHead(200, headers);
      res.end('{"a":2}');
    } // a function which handles posting a message to the database
      


  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

