const lectureModel = require('../models/lecture');

const changeInfo = (newstudent)=>{
    return new Promise((resolve,reject)=>{
        lectureModel.changeInfo({
            gender:newstudent.gender,
            address:newstudent.address,
            gmail:newstudent.gmail,
            phone_number:newstudent.phone_number,
            birthday:newstudent.birthday,
            id:newstudent.id
        })
        .then(result=>{
           resolve(result)
        })
        .catch(err=>{
            console.log(err)
            reject(err)
        })
    })
}

const changepass = (id,newpass)=>{
    return new Promise((resolve,reject)=>{
        lectureModel.changepass(id,newpass)
        .then(result=>{
           resolve(result)
        })
        .catch(err=>{
            console.log(err)
            reject(err)
        })
    })
}

const findOne = (id)=>{
    return new Promise((resolve,reject)=>{
        lectureModel.findOne(id)
        .then(result=>{
           resolve(result)
        })
        .catch(err=>{
            console.log(err)
            reject(err)
        })
    })
}
module.exports = {
    changeInfo,
    changepass,
    findOne
}