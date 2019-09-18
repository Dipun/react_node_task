const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const filmpeople = require('../models/filmPeoples')

router.get('/',(req,res,next) =>{
    filmpeople.find()
        .exec()
        .then(doc =>{
            res.status(200).json({doc })
        })
        .catch(err =>{
            console.log(err);
        })
  

});

router.post('/',(req,res,next) =>{
    const PeopleData = new filmpeople({
        _id:new mongoose.Types.ObjectId(),
        name: req.body.name,
        age:req.body.age,
        eyeColor: req.body.eyeColor,
        gender: req.body.gender,
        company: req.body.company,
        email: req.body.email
    })
    console.log(PeopleData);
    PeopleData.save((err,doc)=>{
        if(!err){
            console.log(doc);
        } else{
            console.log(err);
        }
    })
    res.status(200).json({
        message: 'data inserted successfully',
        insertedData:PeopleData
    })
    });

    module.exports = router;