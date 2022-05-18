const topicModel = require('../models/topic');

const create_topic = (id_subject,id_document,title_topic,content_topic)=>{
    topicModel.create({
        id:id_subject,
        title:title_topic,
        doc:id_document,
        content:content_topic
    })
    .then(res=>{
        console.log('topic Controller',res)
        return res;
    })
    .catch(err=>{
        console.log('topic Controller',err)
        return err;
    })
    return true;
}
const list = (id_topic)=>{
    return new Promise((resolve,reject)=>{
        topicModel.list(id_topic)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            console.log(err)
            reject(false)
        })
    })

}
module.exports = {
    create_topic,
    list
}