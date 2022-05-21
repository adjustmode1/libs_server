const express = require('express');

const studentRoute = express.Router();
const studentController = require('../controllers/student');

studentRoute.post('/create',(req,res)=>{
    let data = {...req.body}
    studentController.addStudent(data.id,data.pass,data.name,data.gender,data.address,data.gmail,data.phone,data.birthday,data.coure)
    .then(result=>{
        console.log(result)
        res.send('ok')
    })
    .catch(err=>{
        console.log(err)
        res.status(400).send('bad request');
    })
})

studentRoute.get('/list',(req,res)=>{
    studentController.showStudent()
    .then(result=>{
        console.log(result)
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
        res.status(400).send('bad request');
    })
})
studentRoute.post('/delete',(req,res)=>{
    studentController.deleteStudent(req.body.id)
    .then(result=>{
        console.log(result)
        res.send('ok')
    })
    .catch(err=>{
        console.log(err)
        res.status(500).send('server error')
    })
})
studentRoute.get('/findOne',(req,res)=>{
    studentController.findOne(req.query['id'])
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
        res.status(400).send('bad request')
    })
})

studentRoute.post('/update',(req,res)=>{
    let info = {...req.body}
    studentController.updateStudent(info.idold,info.id,info.name,info.gender,info.address,info.gmail,info.phone,info.birthday,info.coure)
    .then(result=>{
        console.log(result)
        res.send('ok')
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send('bad request')
    })
})

module.exports = studentRoute;