const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_tony',
    password: 'Celine12#45'
})

module.exports = pool.promise();