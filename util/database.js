const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tony.node',
    password: 'Celine12#45'
})

module.exports = pool.promise();