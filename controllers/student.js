const studentModel = require('../models/student');
const hash = require('../utils/hasing');
var fs = require('fs');
const changeInfo = (newstudent)=>{
    return new Promise((resolve,reject)=>{
        studentModel.changeInfo({
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
        studentModel.findOne(id)
        .then(result=>{
           resolve(result)
        })
        .catch(err=>{
            console.log(err)
            reject(err)
        })
    })
}

const showStudent = ()=>{
    return new Promise((resolve,reject)=>{
        studentModel.showStudent()
        .then(result=>{
            resolve(result)
        })
        .catch(err=>{
            console.log(err)
            reject(err)
        })
    })
}
const addStudent = (id,pass,name,gender,address,gmail,phone,birthday,coure)=>{
    return new Promise((resolve,reject)=>{
        hash.hash(pass)
        .then(res=>{
            studentModel.addStudent(id,res,name,gender,address,gmail,phone,birthday,coure)
            .then(result=>{
                let path = './img/student/'+id;
                if(!fs.existsSync(path)){
                    fs.mkdirSync(path)
                }
                let pathdoc = './docs/'+id
                if(!fs.existsSync(pathdoc)){
                    fs.mkdirSync(pathdoc)
                    fs.mkdirSync(pathdoc+'/private')
                }else{
                    console.log('tồn tại: '+pathdoc)
                }
                resolve(result)
            })
            .catch(err=>{
                console.log(err)
            reject(err)
        })
        })
        .catch(err=>{
            reject('no hash')
        })
    })
}

const deleteStudent = (id)=>{
    return new Promise((resolve,reject)=>{
        studentModel.deleteStudent(id)
        .then(result=>{
            let path = './img/student/'+id;
            if(fs.existsSync(path)){
                fs.rmdirSync(path)
            }
            let pathdoc = './docs/'+id;
            if(fs.existsSync(pathdoc)){
                fs.rmdirSync(pathdoc);
            }
            resolve(result)
        })
        .catch(err=>{
            console.log(err)
            reject(err)
        })
    })
}

const updateStudent = (idold,id,name,gender,address,gmail,phone,birthday,coure)=>{
    return new Promise((resolve,reject)=>{
        studentModel.updateStudent(idold,id,name,gender,address,gmail,phone,birthday,coure)
        .then(result=>{
            if(idold!==id){
                let oldpath = './img/student/'+idold;
                let newpath = './img/student/'+id
                if(fs.existsSync(oldpath)){
                    fs.rename(oldpath,newpath,err=>{
                        console.log('rename err',err)
                    })
                }
                let pathdoc = './docs/';
                if(fs.existsSync(pathdoc+idold)){
                    fs.rename(pathdoc+idold,pathdoc+id,err=>{
                        console.log('rename err',err)
                    })
                }
            }
            resolve(result)
        })
        .catch(err=>{
            console.log(err)
            reject('no hash')
        })
    })
}

module.exports = {
    changeInfo,
    changepass,
    findOne,
    addStudent,
    showStudent,
    deleteStudent,
    updateStudent
}