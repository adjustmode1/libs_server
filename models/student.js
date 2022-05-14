const conn = require('./../utils/connect')

const findOne =(username)=>{
    return new Promise((resolve,reject)=>{
        let sql = `select * from student where id_student='${username}' limit 1`;
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
} 

const changeInfo = (newinfo)=>{
    return new Promise((resolve,reject)=>{
        sql = `update student set 
            gender_student='${newinfo.gender}',
            address_student='${newinfo.address}',
            gmail_student='${newinfo.gmail}',
            phone_student='${newinfo.phone_number}',
            birthday_student='${newinfo.birthday}'
            where id_student='${newinfo.id}'`;

        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
const updateAvatar = (id,path)=>{
    return new Promise((resolve,reject)=>{
        sql = `update student set 
            avatar_student='${path}'
            where id_student='${id}'`;
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
    findOne,
    changeInfo,
    updateAvatar
}