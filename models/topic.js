const conn = require('../utils/connect');

const create = (topic)=>{
    return new Promise((resolve,reject)=>{
        let sql = `insert into topic (id_subject,id_document,title_topic,status,topic_content) values('${topic.id}','${topic.doc}','${topic.title}',1,'${topic.content}');`;
        console.log('model topic',sql)
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const list = (id) =>{
    return new Promise((resolve,reject)=>{
        let sql = `select * from topic where id_subject = '${id}';`;
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
    create,
    list
}