const conn = require('./../utils/connect');

const findOne =(username)=>{
    return new Promise((resolve,reject)=>{
        let sql = `select * from lectures where id_lecture='${username}' limit 1`;
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