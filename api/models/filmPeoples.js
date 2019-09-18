const mongoose = require('mongoose');
const filmPeopleSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    age:Number,
    eyeColor: String,
    gender: String,
    company: String,
    email: String

})

module.exports = mongoose.model('person',filmPeopleSchema);