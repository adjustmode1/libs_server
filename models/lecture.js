const conn = require('./../utils/connect');

const changeInfo = (newinfo)=>{
    return new Promise((resolve,reject)=>{
        sql = `update lectures set 
            gender_lecture='${newinfo.gender}',
            address_lecture='${newinfo.address}',
            gmail_lecture='${newinfo.gmail}',
            phone_number_lecture='${newinfo.phone_number}',
            birthday_lecture='${newinfo.birthday}'
            where id_lecture='${newinfo.id}'`;
        console.log('model',sql)
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

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

const updateAvatar = (id,path)=>{
    return new Promise((resolve,reject)=>{
        sql = `update lecture set 
            avatar_lecture='${path}'
            where id_lecture='${id}'`;
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const changepass = (id,password)=>{
    return new Promise((resolve,reject)=>{
        let sql = `update lectures set password_lecture = '${password}' where id_lecture = '${id}'`;
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
    changepass,
    updateAvatar
}