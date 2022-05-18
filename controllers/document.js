const documentModel = require('../models/document');

const create_doctopic = (id_doc,id_type,auth,name,link)=>{
    return new Promise((resolve,reject)=>{
        if(
            !(id_doc===''||
            id_type===''||
            name===''||
            auth===''||
            link==='')
        ){
            documentModel.create_doctopic({
                id_doc,id_type,auth,name,link
            })
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{   
                console.log('con_er',err)
                reject(err)
            })
        }else{
            reject('not null')
        }
    })
}

const findOne = (id_doc)=>{
    return new Promise((resolve,reject)=>{
        documentModel.findOne(id_doc)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{   
            console.log('con_er',err)
            reject(err)
        })
    })
}

module.exports = {
    create_doctopic,
    findOne
}