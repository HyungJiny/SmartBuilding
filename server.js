var express = require('express');
var bodyParser = require('body-parser');
var app = express()

// using DB by orientDB
var OrientDB = require('orientjs');
var dbServer = OrientDB({
	host: 'localhost',
	port: 2480,
	username: 'root',
	password: 'jiny1004'
});
var db = dbServer.use('SmartBuilding');

// set template path
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', '/views');

// set notice page
app.get(['/Notice', '/Notice/:id'], function(req, res){
		var sql = 'SELECT FROM notice';
		db.query(sql).then(function(results){
			res.render('notice', {notices:results});
		});
});


// main page
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function(req, res){
	res.send("Hello!");
});

// open server
app.listen(3000, function(){
	console.log('Connected 3000 port!');
});
