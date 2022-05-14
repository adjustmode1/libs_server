const subjectModel = require('../models/subject');

const subject_of_me = (id_student)=>{
    return new Promise((resolve,reject)=>{
        subjectModel.subject_of_me(id_student)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

const list = (query)=>{
    return new Promise((resolve,reject)=>{
        if(!query.index){
            query.index = 1;
        }
        if(!query.name_lecture){
            query.name_lecture = '';
        }
        if(!query.title_subject){
            query.title_subject = '';
        }
        console.log(query)
        subjectModel.list(query)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

module.exports = {
    subject_of_me,
    list
}