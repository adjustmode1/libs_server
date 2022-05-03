const studentModel = require('./../models/student');

const login = async (username,password)=>{
    let student = await studentModel.findOne(username);
    console.log(student)
    if(student){
        console.log('có')
    }
}

module.exports = {
    login
};