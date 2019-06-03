//sql script

var mysql = require('mysql');

//create a conection
var con = mysql.createConnection({
    host:'localhost',
    user:'paulkumar',
    password:'maggie33'
});

con.connect(function(err){
    if(err){
        throw err;
    }
    console.log("connected");
});