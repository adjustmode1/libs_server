const {findOne} = require('./../models/student');

const login = (username,password)=>{
    findOne(username);
}

module.exports = {
    login
};