const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const filmPeoples = require('./api/routes/filmPeoples');
mongoose.connect('mongodb://localhost:27017/MoviDataDB',{ useNewUrlParser: true },(err)=>{
    if(!err){
        console.log('Db connected');
    } else{
        console.log('Problem in db connection '+err);
    }
})
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-requested-With,Content-Type,Accept,Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT','POST','PATCH','DELETE','GET');
        return res.status(200).json({});
    }
    next();
})

//Routes handels
app.use('/filmPeoples',filmPeoples);

app.use((req,res,next)=>{
    const error = new Error('Not found request');
    error.status= 404;
    next(error);
})
app.use((req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            Msg: error.message
        }
    })
})
module.exports = app;