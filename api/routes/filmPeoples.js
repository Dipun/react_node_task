const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const filmpeople = require('../models/filmPeoples')
router.get('/',(req,res,next) =>{
res.status(200).json({ 
    "name" : "Clinton Shorter", 
    "__v" : 0, 
    "composer" : {
        "picture" : "District 9", 
        "gross" : 115.6, 
        "average" : 56.2, 
        "movies" : 5, 
        "total_gross" : 281, 
        "rank" : 95
    }, 
    "updated_at" : "2018-08-26T00:22:07.972+0000"
})
});

router.post('/',(req,res,next) =>{
    const PeopleData = new filmpeople({
        _id:new mongoose.Types.ObjectId(),
        o_id: req.body.o_id,
        name:req.body.name,
        composer: req.body.composer,
        updated_at: req.body.updated_at
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