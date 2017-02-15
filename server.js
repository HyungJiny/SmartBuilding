// Load the depenendcies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const router = require('./router/main')(app);

// Load the config
const config = require('./config');
const port = process.env.PORT || 3000;

// set template path
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');

// main page
app.use(express.static('public'));

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// print the request log on console
app.use(morgan('dev'));

// set the secret key variable for smartbuilding
app.set('jwt-secret', config.secret);

//configure api router
app.use('/api', require('./router/api'));

// open server
app.listen(port, function(){
	console.log(`Express is running on port ${port}`);
});

// connect to mongodb server
mongoose.connect(config.mongodbUri);
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', ()=>{
	console.log('Connected to mongodb server');
});
