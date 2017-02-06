/*
 * ./database_orientdb.js
 * example file that how to use orientDB
 */

var OrientDB = require('orientjs');

var dbServer = OrientDB({
  host: 'localhost',
  port: 2480,
  username: 'root',
  password: ''
});
var db = dbServer.use('');
