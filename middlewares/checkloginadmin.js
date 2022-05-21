const {checkToken} = require('./../utils/jwt');

const checkAuthAdmin = (req,res,next)=>{
    checkToken(req.cookies['token_libs_admin'])
    .then(res=>{
        if(res.data.rule!==1){
            console.log('not admin',res)
            res.status(401).send('unauth')
        }else{
            req.info = res.data;
            next();
        }
    })
    .catch(err=>{
        console.log('err',req.cookies['token_libs'])
        res.status(401).send('unauth')
    })
}

module.exports = checkAuthAdmin;