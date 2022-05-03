
// khai báo thư viện
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const jwt = require('./utils/jwt');
const cors = require('cors');
const loginController = require('./controllers/login');

require('dotenv').config()

// tạo server nodejs
const app = express();

app.use(bodyParser.json());

app.use(cors({origin: true, credentials: true}))

// cho truy xuất tới folder img
app.use(express.static('img'))

app.get('/',(req,res)=>{
    res.send('server API NODEJS for LIBS')
})
app.post('/login',(req,res)=>{
    console.log(req.body)
    loginController.login(req.body.username,req.body.password)
    res.send('fawef')
})
app.get('/login',(req,res)=>{
    res.send('fawef')
})

const port = process.env.PORT_SERVER||5000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
