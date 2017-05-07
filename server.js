/*jshint esversion:6*/
let bodyParser = require('body-parser');
let express = require('express');
let path = require('path');

let app = express();
let PORT = process.env.PORT || 8080;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function(){

    console.log("App litsening on PORT: "+ PORT);

});
