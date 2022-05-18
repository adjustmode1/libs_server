const topicModel = require('../models/topic');

const create_topic = (id_subject,id_document,title_topic,content_topic)=>{
    return new Promise((resolve,reject)=>{
        topicModel.create({
            id:id_subject,
            title:title_topic,
            doc:id_document,
            content:content_topic
        })
        .then(res=>{
            console.log('topic Controller',res)
            resolve(res)
        })
        .catch(err=>{
            console.log('topic Controller',err)
            reject(err)
        })
    })
}
const list = (id_subject)=>{
    return new Promise((resolve,reject)=>{
        topicModel.list(id_subject)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            console.log(err)
            reject(false)
        })
    })

}

const listDoc = (id_subject)=>{
    return new Promise((resolve,reject)=>{
        topicModel.listDoc(id_subject)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            console.log(err)
            reject(false)
        })
    })
}

const changeStatusTopic = (id_topic,status)=>{
    return new Promise((resolve,reject)=>{
        topicModel.changeStatusTopic(id_topic,status)
        .then(res=>{
            console.log(res)
            resolve(true)
        })
        .catch(err=>{
            console.log(err)
            reject(false)
        })
    })
}

const deleteTopic = (id_topic)=>{
    return new Promise((resolve,reject)=>{
        // topicModel.deleteTopic(id_topic)
        // .then(res=>{
        //     console.log(res)
        //     resolve(true)
        // })
        // .catch(err=>{
        //     console.log(err)
        //     reject(false)
        // })
        resolve(true)
    })
}

module.exports = {
    create_topic,
    list,
    listDoc,
    changeStatusTopic,
    deleteTopic
}