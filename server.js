var express = require('express');
var app = express()
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', '/views');
