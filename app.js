'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var bodyParser = require('body-parser');

const passport = require('./initializers/passport');

var config = {
  appRoot: __dirname // required config
};

app.use(bodyParser.json());
app.use(passport.initialize());

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  console.log(`Listening on port ${port}`);
});

module.exports = app; // for testing
