var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.use(express.static(__dirname + "/public"));


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("RGB Server has started...");
});