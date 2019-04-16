var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


var config = require('./config/db');
var IndexRouter = require('./routes/products');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.db).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors(allowedHeaders= '*',methods = '*',origin= '*'));
app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.get('/',(req,res)=>{
    res.status(200).json({
        message: "Hello World"
    })
})

app.use('/api/v1',IndexRouter);

app.listen(3000,()=>console.log("server conneced on 3000"));