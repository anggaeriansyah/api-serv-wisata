const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "belajar_ci"
})

module.exports = db