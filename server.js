// server.js

// set up ========================
const express       = require('express');        // call express
const app           = express();                 // define our app using express
const mongoose      = require('mongoose');       // mongoose for mongodb
const morgan        = require('morgan');         // log requests to the console (express4)
const bodyParser    = require('body-parser');    // pull information from HTML POST (express4)
const cors          = require('cors');           // allows cross origin requests
const config        = require('./server/config');       // server configurations
const errorHelper   = require('./server/helpers/error.helper');


// database ======================
// connect to mongoDB database
mongoose.connect(config.persistence.connectionString);


// configuration =================
app.use(morgan('dev'));                          // log every request to the console
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }));  // parse application/vnd.api+json as json
app.use(cors());


// routes ========================
app.use(express.static(__dirname + '/public'));             // serve front-end
app.use(config.server.root, require('./server/routes'));    // api routes
// app.use('v2/api', require('./apiv2/routes'));            // easily open for versioning


// error handling ================
app.use(errorHelper.errorHandler);


// listen ========================
const port = process.env.PORT || config.server.port;

app.listen(port);
console.log('Magic happens on port ' + port);
