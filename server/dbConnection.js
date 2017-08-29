const mysql = require('mysql');

let connMysql = () => mysql.createConnection({
        host: 'localhost',
        user: 'root',
        passowrd: '',
        database: 'site'
});

module.exports = () => connMysql;