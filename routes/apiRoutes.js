// LOAD DATA: here we are linking routes to the "data" sources.
var table = require("../data/table");
var waiting = require("../data/waiting"); 

// ROUTING

// look at 13/13 for more info

module.exports = function(app) {

    // the get handles the HTML request being loaded
    app.get("/api/tables", function(req, res){
        res.json(table);
    })

    app.get("/api/waitlist", function(req, res){
        res.json(waiting);
    })

    // the POST handle pushing data into a server similiar to firebase etc..
    app.post("/api/tables", function(req, res){
        
        if (table.length <5){
            table.push(req.body);
            res.json(true);
        }
        else{
            waiting.push(req.body);
            res.json(false);
        }
    });

    // this is to clear 
    app.post("/api/clear", function(req, res){
        table.length = [];
        waiting.length = [];

        res.json({ok:true});
    })
}

// TLDR; thing you learned here is the usage/importance of module.exports basically this page handles the server back end info 
// as well as the front end requests more specfically for "Making a Reservation" and "Waitlist"