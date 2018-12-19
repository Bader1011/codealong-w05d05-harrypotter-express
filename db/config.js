// configure postgres to connect our db to our express app
var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
  host: 'localhost',
  port: 5432,
  database: 'harry_potter_express',
  user: 'jackie' // your username here!!
}

var connection = pgInstance(process.env.DATABASE_URL || config);

module.exports = connection;