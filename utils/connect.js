const mysql = require('mysql');
require('dotenv').config();

let conn = mysql.createConnection({
    host:process.env.HOST_MYSQL,
    user:process.env.USER_MYSQL,
    password:process.env.PASSWORD_MYSQL,
    database:process.env.DB_MYSQL,
    port:process.env.PORT_MYSQL
})


conn.connect((err)=>{
    if(err) {
        console.log('kết nối db không thành công: '+err)
    }
})

module.exports = conn;