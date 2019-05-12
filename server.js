var express = require("express");

// this tells the node we are creating an 'express' server
var app = express();
// we want a dynamic pot for HEROKU ... read the herokuguide.md number 6
var PORT = process.env.PORT || 3000;

//hanldes data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// ROUTER: below points our server to a series of route files that give our server a mpa of how to respond when users visit or request 
// data from various URLs. 

/*
// I got this from online the solutions are a little different
var api = require("./routes/apiRoutes");
var html = require("./routes/htmlRoutes");
app.use('/routes/apiRoutes', api);
app.use('/routes/htmlRoutes', html);

BUT IT DOESNT WORK
*/

// they did this but i cant find the syntax for it
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// LISTENER: this code "starts" our server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})
