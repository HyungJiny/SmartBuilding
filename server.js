var express = require('express');
var bodyParser = require('body-parser');
var app = express()
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', '/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function(req, res){
	res.send("Hello!");
});
app.listen(3000, function(){
	console.log('Connected 3000 port!');
});
