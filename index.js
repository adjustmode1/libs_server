
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

app.use('/info',infoRouter)
app.use('/subject',subjectRouter);


const port = process.env.PORT_SERVER||5000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
