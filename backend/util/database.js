const mysql = require('mysql2');
const env = require('dotenv').config()

const database = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
    multipleStatements: true,
  });
  database.connect(function(err){
    if(err){
      throw err;
    }
    else{
    console.log("Connecté à la base de donnée MySQL !")}
  })

  module.exports = database;
