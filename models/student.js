const conn = require('./../utils/connect')

const findOne = (username)=>{
    let sql = `select * from student where id_student='${username}'`;
    conn.query(sql,(err,data)=>{
        console.log('error',err)
        console.log('data',data)
    })
}

module.exports = {
    findOne
}