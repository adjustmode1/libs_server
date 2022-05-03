const jwt = require('jsonwebtoken')
require('dotenv').config();

const key = process.env.KEY_JWT;

const verify = (token)=>{
    return jwt.verify(token,key)
}
const sign = (data)=>{
    return jwt.sign(data,key)
}
module.exports = {
    verify,
    sign
}