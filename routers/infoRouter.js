const express = require('express');
const infoRouter = express.Router();
const checkAuth = require('../middlewares/checklogin');
const studentController = require('../controllers/student');
const { signToken } = require('../utils/jwt');

// app.post('/changeinfo',(req,res)=>{
//     console.log('changeinfo_token',req.cookies['token_libs'])
//     res.send('ok');
// })
infoRouter.post('/changeinfo',checkAuth,(req,res)=>{
    if(studentController.changeInfo(oldstudent,newstudent)){
        let newinfo = {...oldstudent}
        newinfo.gender = newinfo.gender;
        newinfo.gmail = newinfo.gmail;
        newinfo.address = newinfo.address;
        newinfo.phone_number=newinfo.phone_number;
        newinfo.birthday=newinfo.birthday;
        signToken(newinfo)
        .then(result=>{
            res.send(result)
        })
        .catch(err=>{
            res.status(500).send('server eror')
        })
    }else{
        res.status(400).send('bad request');
    }
})

infoRouter.post('/changeinfo_image',checkAuth,(req,res)=>{
    console.log('đã chuyển file')
    let newinfo = {...req.info}
    let folder = 'student'
    if(req.info.rule){
        folder = 'leture';
    }
    newinfo.avatar = 'image/'+folder+'/'+req.info.id+'/'+req.file.path;
    console.log('path',folder)
    signToken(newinfo)
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.status(500).send('server error')
    })
    res.send('ok')
})
// app.post('/changeinfo_image',checkAuth,upload_image.single('avatar'),(req,res)=>{
//     console.log('đã thêm file')
//     if(req.file){
//         moveFile(req.file.path,'img/student/'+req.info.id+'/'+req.file.filename,err=>{
//             if(err){
//                 console.log(err)
//                 res.send('no')
//             }else{
//                 console.log('đã chuyển file')
//                 res.send('ok');
//             }
//         })
//     }else{
//         res.status(500).send('server error')
//     }
// })

module.exports = infoRouter;