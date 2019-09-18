const mongoose = require('mongoose');
const filmPeopleSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    o_id : String,
    name : String,
    composer : Object,
    updated_at : String

})

module.exports = mongoose.model('movidetail',filmPeopleSchema);