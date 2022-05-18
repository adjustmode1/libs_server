const express = require('express');
const subjectController = require('../controllers/subject');
const checkAuth = require('../middlewares/checklogin');

const subjectRouter = express.Router();

subjectRouter.get('/subject_of_me',checkAuth, async(req,res)=>{
    subjectController.subject_of_me(req.info.id)
    .then(result=>{
        res.status(200).send(result)
    })
    .catch(err=>{
        res.status(200).send('');
    })
})

subjectRouter.get('/list',checkAuth,async(req,res)=>{
    //max_size

    //title_subject
    //id_subject
    //name lecture
    let query = {
        index:req.query['index'],
        max_size:req.query['max_size'],
        title_subject:req.query['title_subject'],
        name_lecture:req.query['name_lecture']
    }
    // {
    //     max_size,
    //     query
    // }
    subjectController.list(query)
    .then(result=>{
        res.status(200).send(result)
    })
    .catch(err=>{
        res.status(200).send('');
    })
})

subjectRouter.get('/findOne',checkAuth,async(req,res)=>{
    if(req.query['id_subject']!==''){
        subjectController.findOne(req.query['id_subject'])
        .then(result=>{
            res.status(200).send(result)
        })
        .catch(err=>{
            res.status(400).send(err);
        })
    }else{
        res.status(400).send('bad request')
    }
})
// ,checkAuth
module.exports = subjectRouter;
