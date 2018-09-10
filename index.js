process.env.NODE_ENV = 'development';

var config = require('./server/config/config');
var context = require('./server/server');


context.server.listen(config.port);
console.log("Listening on http://localhost:" + config.port);