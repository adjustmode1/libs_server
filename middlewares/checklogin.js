const jwt = require('./../utils/jwt');

const checkLogin = async (req,res,next)=>{
    jwt.verify()
    next();
}

module.exports = checkLogin;

