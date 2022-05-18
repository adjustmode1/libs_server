const express = require('express');

const topicRouter = express.Router();
const multer = require('multer');
const {moveFile} = require('../utils/movefile');
//lưu trữ file avatar sau khi client tải lên
const store_file = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,(file.originalname));
    }
})
const upload_file = multer({storage:store_file});
const documentController = require('../controllers/document');
const topicController = require('../controllers/topic');
topicRouter.post('/create/file',upload_file.array('link_doc'),(req,res)=>{
    let data = JSON.parse(decodeURIComponent(req.headers['data']));
    if(req.files.length>0){
        if(data.id_subject){
            req.files.forEach(el=>{
                let id_file = Date.now()+el.filename;
                moveFile(el.path,'docs/subjects/'+data.id_subject+'/'+id_file,err=>{
                    if(err){
                        console.log(err)
                        res.status(500).send('no')
                    }else{
                        documentController.create_doctopic(id_file,2,req.info.id,el.filename,'docs/subjects/'+data.id_subject+'/'+id_file)
                        .then(res=>{
                            topicController.create_topic(data.id_subject,id_file,data.topic_title,data.topic_content)
                        })
                        .catch(err=>{
                            console.log('xóa file')
                        })
                    }
                })
            })
            res.status(200).send('ok');
        }else{
            res.status(400).send('error')
        }
    }else{
        res.status(400).send('server error')
    }
})

topicRouter.post('/create/data',(req,res)=>{
    // console.log('data',req.headers)
    res.send('ok');
})

topicRouter.get('/list',(req,res)=>{
    topicController.list(req.query['id'])
    .then(result=>{
        console.log(res)
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
        res.status(401).send('not found');
    })
})

module.exports = topicRouter;