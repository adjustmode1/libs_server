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
        resolve(true)
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

const listDoc = (id)=>{
    return new Promise((resolve,reject)=>{
        let sql = `SELECT * FROM topic as tp, document as dc where tp.id_document = dc.id_doc and id_subject = '${id}' GROUP BY id_topic ;`;
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const changeStatusTopic = (id_topic,status)=>{
    return new Promise((resolve,reject)=>{
        let sql = `update topic set status = ${status} WHERE id_topic = '${id_topic}';`;
        console.log('model',sql);
        conn.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const deleteTopic= (id_topic)=>{
    return new Promise((resolve,reject)=>{
        let sql = `delete from topic WHERE id_topic = '${id_topic}';`;
        console.log('model',sql);
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
    list,
    listDoc,
    deleteTopic
}