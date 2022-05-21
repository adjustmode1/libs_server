
// khai báo thư viện
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');

//routers
const subjectRouter = require('./routers/subjectRouter');
const infoRouter = require('./routers/infoRouter');

//controller
const loginController = require('./controllers/login');
const checkAuth = require('./middlewares/checklogin');
const checkAuthAdmin = require('./middlewares/checkloginadmin');
const topicRouter = require('./routers/topicRouters');
const lectureController = require('./controllers/lecture')
const hashing = require('./utils/hasing');
const studentRoute = require('./routers/student');
//lưu trữ file avatar sau khi client tải lên
const store_image = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now()+(file.originalname));
    }
})
const upload_image = multer({storage:store_image});

require('dotenv').config()

// tạo server nodejs
const app = express();

app.use(bodyParser.json());
app.use(cookieParser({ extended: false }))
app.use(cors({origin: true, credentials: true}))
// app.use(cors({origin: true, credentials: true}))

// cho truy xuất tới folder img
app.use(express.static('img'))
app.get('/',(req,res)=>{
    res.send('server API NODEJS for LIBS')
})

app.post('/login',async (req,res)=>{
    let token =  '';
    loginController.login(req.body.username,req.body.password)
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        console.log(err)
        res.status(204).send(token);
    })
})
app.get('/download_file',checkAuth,(req,res)=>{
    if(req.query['path']!==''){
        res.download(req.query['path'])
    }else{
        res.status(400).send('no file')
    }
})

app.post('/changepassword_lecture',checkAuth,(req,res)=>{
    // lectureController.changepass(req.info.id,req.info.password)
    lectureController.findOne(req.info.id)
    .then(result=>{
        console.log('pass',req.body.password)
        console.log('lec',result[0].password_lecture)
        hashing.compare(req.body.password,result[0].password_lecture)
        .then(result1=>{
            hashing.hash(req.body.password)
            .then(result2=>{
                console.log('hash',result2)
                lectureController.changepass(req.info.id,result2)
                res.send('ok')
            })
            .catch(err=>{
                console.log('has',err)
                res.status(500).send(err)
            })
        })
        .catch(err=>{
            console.log(err)
            res.status(204).send('sai password')
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).send('server error')
    })
})

app.post('/changepassword_student',checkAuth,(req,res)=>{

})

app.use('/info',checkAuth,infoRouter)
app.use('/subject',checkAuth,subjectRouter);
app.use('/topic',checkAuth,topicRouter);

//==================================================adim=============================================//
app.post('/loginadmin',async (req,res)=>{
    let token =  '';
    loginController.loginadmin(req.body.username,req.body.password)
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        console.log(err)
        res.status(204).send(token);
    })
})

app.use('/student',checkAuthAdmin,studentRoute)

const port = process.env.PORT_SERVER||5000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
