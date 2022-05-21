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
            phone_number_student='${newinfo.phone_number}',
            birthday_student='${newinfo.birthday}'
            where id_student='${newinfo.id}'`;
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

const changepass = (id,password)=>{
    return new Promise((resolve,reject)=>{
        let sql = `update lectures set password_lecture = ${password} where id_lecture = ${id}`;
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
const showStudent = ()=>{
    return new Promise((resolve,reject)=>{
        let sql = `select * from student`;
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
const addStudent = (id,pass,name,gender,address,gmail,phone,birthday,coure)=>{
    return new Promise((resolve,reject)=>{
        let sql = `insert into student(id_student,password_student,name_student,gender_student,address_student,gmail_student,phone_number_student,birthday_student,coure_student) 
                        values('${id}','${pass}','${name}',${gender},'${address}','${gmail}','${phone}','${birthday}','${coure}')`;
        conn.query(sql,(err,data)=>{
            if(err){

                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const deleteStudent = (id)=>{
    return new Promise((resolve,reject)=>{
        let sql = `delete from student where id_student = '${id}'`;
        console.log('sql',sql)
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const updateStudent = (idold,id,name,gender,address,gmail,phone,birthday,coure)=>{
    return new Promise((resolve,reject)=>{
        let sql = `update student set id_student='${id}', name_student = '${name}', gender_student='${gender}',address_student='${address}',gmail_student='${gmail}',phone_number_student='${phone}',birthday_student='${birthday}',coure_student='${coure}' where id_student = '${idold}'`;
        console.log('sql',sql)
        conn.query(sql,(err,data)=>{
            if(err){
                console.log(err)
                reject(err)
            }else{
                resolve(data)
            }
        })
        resolve('ok')
    })
}


module.exports = {
    findOne,
    changeInfo,
    updateAvatar,
    changepass,
    addStudent,
    deleteStudent,
    showStudent,
    updateStudent
}