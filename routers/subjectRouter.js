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

subjectRouter.get('/list', async(req,res)=>{
    //max_size

    //title_subject
    //id_subject
    //name lecture
    let query = {
        index:req.query['index'],
        max_size:req.query['max_size'],
        title_subject:req.query['title_subject'],
        name_subject:req.query['name_subject']
    }
    console.log(query)
    // {
    //     max_size,
    //     query
    // }
    subjectController.list({
        max_size:query.max_size
    })
    .then(result=>{
        res.status(200).send(result)
    })
    .catch(err=>{
        res.status(200).send('');
    })
})
// ,checkAuth
module.exports = subjectRouter;
