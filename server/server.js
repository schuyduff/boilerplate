var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var expressWs = require('express-ws')(app, server);
var Promise = require("bluebird");
var fs = require("fs");
Promise.promisifyAll(fs);
var _ = require('lodash');
var api = require('./api');

//========================================================SERVER ROUTING
require('./middleware/appMiddleware')(app);

app.use('/api', api);

app.use(function(err, req, res, next) {
  if (err) {
    console.log("------------------------------------------------Error!");
    console.log(err);
    res.send();
  }
});



//============================================EXPORTS FOR SERVER
exports.app = app;
exports.server = server;
exports.expressWs = expressWs;
module.exports = exports;