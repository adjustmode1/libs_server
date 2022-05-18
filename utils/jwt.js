const jwt = require('jsonwebtoken');
require('dotenv').config();

const key = process.env.KEY_JWT;
const exp = process.env.EXP_JWT;
const checkToken = (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,key,(err,res)=>{
            if(err){
                console.log(err)
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}
const signToken = (data)=>{
    let token = jwt.sign({data:data},key,{expiresIn:exp});
    return token;
}
module.exports = {
    checkToken,
    signToken
}