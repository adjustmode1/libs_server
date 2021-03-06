const {checkToken} = require('./../utils/jwt');

const checkAuth = (req,res,next)=>{
    checkToken(req.cookies['token_libs'])
    .then(res=>{
        req.info = res.data;
        next();
    })
    .catch(err=>{
        console.log(req.cookies['token_libs'])
        res.status(401).send('unauth')
    })
}


module.exports = checkAuth;

