const conn = require('../utils/connect');

const create_doctopic = (doc)=>{
    return new Promise((resolve,reject)=>{
        let sql = `insert into document (id_doc,id_type,auth_doc,name_doc,link_doc) 
                        values('${doc.id_doc}','${doc.id_type}','${doc.auth}','${doc.name}','${doc.link}');`;
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

const findOne = (id_doc)=>{
    return new Promise((resolve,reject)=>{
        let sql = `select * from document where id_doc = ${id_doc};`;
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

module.exports = {
    create_doctopic,
    findOne
}