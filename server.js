var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data){
        console.log(data);
        res.end(data)
    });
})

var server = app.listen(8080, function() {
    console.log("Example app listening on port 8080")
})