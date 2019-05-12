// path package to get the correct file for our HTML (you could also do the long way)
var path = require("path");

//ROUTING

module.exports = function(app){

    app.get("/tables", function(req,res){
        res.sendFile(path.join(__dirname, "../public/table.html"));
    });

    app.get("/reserve", function(req,res){
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

    // If no matching route is found deafult to home
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}

// TLDR; difference between this and apitRoutes.js is this handles the html (what you actually see) since its routes to the .html
// you have created. The other one handles the data (JSON) files that get logged onto the front end stuff.