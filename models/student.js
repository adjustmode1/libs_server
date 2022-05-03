const conn = require('./../utils/connect')

const findOne =(username)=>{
    return new Promise((resolve,reject)=>{
        let sql = `select * from student where id_student='${username}'`;
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
} 

module.exports = {
    findOne
}