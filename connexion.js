// import { createConnection } from 'mysql2';
let mysql = require('mysql2');

let connexion = mysql.createConnection({
    host: "localhost",
    database: "sakila",
    user: "root",
    password: "199211"
});

connexion.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


connexion.query("show full tables", function (err, result, fields) {
    if (err) throw err; 
    console.log(result);
});

connexion.end();