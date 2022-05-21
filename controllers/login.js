const hash = require('./../utils/hasing')
const studentModel = require('./../models/student');
const lectureModel = require('./../models/lecture');
const jwt = require('./../utils/jwt');

const login = async(username,password)=>{
    let student = await studentModel.findOne(username);
    return new Promise((resolve,reject)=>{
        if(student.length){
                hash.compare(password,student[0].password_student)
                .then(res=>{
                    if(res){
                        let result = {
                            id:student[0].id_student,
                            name:student[0].name_student,
                            gender:student[0].gender_student,
                            address:student[0].address_student,
                            gmail:student[0].gmail_student,
                            phone_number:student[0].phone_number_student,
                            birthday:student[0].birthday_student,
                            coure:student[0].coure_student,
                            avatar:student[0].avatar_student,
                        }
                        let token = jwt.signToken(result);
                        resolve({
                            token,
                            data:result
                        })
                    }else{
                        reject('')
                    }
                }) 
                .catch(err=>{
                    reject('')
                })
        }else{
            let lecture = [];
            lectureModel.findOne(username)
            .then(res=>{
                lecture = res;
                if(lecture.length){
                    hash.compare(password,lecture[0].password_lecture)
                    .then(res=>{
                        if(res){
                            let result = {
                                id:lecture[0].id_lecture,
                                name:lecture[0].name_lecture,
                                gender:lecture[0].gender_lecture,
                                gmail:lecture[0].gmail_lecture,
                                phone_number:lecture[0].phone_number_lecture,
                                avatar:lecture[0].avatar_lecture,
                                birthday:lecture[0].birthday_lecture,
                                address:lecture[0].address_lecture,
                                rule:lecture[0].rule_lecture
                            }
                            let token = jwt.signToken(result);
                            resolve({
                                token,
                                data:result
                            })
                        }else{
                            reject('')
                        }
                    }) 
                    .catch(err=>{
                        reject('')
                    })
                }else{
                    reject('')
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    })
}

const loginadmin = async (username,password) =>{
    return new Promise((resolve,reject)=>{
        lectureModel.findOne(username)
            .then(res=>{
                lecture = res;
                if(lecture.length){
                    hash.compare(password,lecture[0].password_lecture)
                    .then(res=>{
                        if(res){
                            let result = {
                                id:lecture[0].id_lecture,
                                name:lecture[0].name_lecture,
                                gender:lecture[0].gender_lecture,
                                gmail:lecture[0].gmail_lecture,
                                phone_number:lecture[0].phone_number_lecture,
                                avatar:lecture[0].avatar_lecture,
                                birthday:lecture[0].birthday_lecture,
                                address:lecture[0].address_lecture,
                                rule:lecture[0].rule_lecture
                            }
                            let token = jwt.signToken(result);
                            resolve({
                                token,
                                data:result
                            })
                        }else{
                            reject('')
                        }
                    }) 
                    .catch(err=>{
                        reject('')
                    })
                }else{
                    reject('')
                }
            })
            .catch(err=>{
                console.log(err)
            })
    })
}

module.exports = {
    login,
    loginadmin
};