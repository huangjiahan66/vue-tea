const mysql = require('mysql');
let connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:"111",
	database:'vue_store'
})
module.exports = connection;