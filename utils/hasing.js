const hashing = require('bcryptjs')

const hash = (password)=>{
    return new Promise((resolve,reject)=>{
        hashing.genSalt(10, function(error, salt) {
            hashing.hash(password, salt, function(err, hash) {
                if(err){
                    reject('')
                }else{
                    resolve(hash)
                }
            });
        });
    })
}

const compare = (password,hash)=>{
    return new Promise((resolve,reject)=>{
        hashing.compare(password,hash, function(err, res) {
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        });
    })
}


module.exports = {
    hash,compare
}