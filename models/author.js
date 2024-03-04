const mongoose = require('mongoose');

//Data Retrieval 
const Schema = mongoose.Schema;
const Author = new Schema ({
    name: String,
    email: String,
    phone: String

});

const author = mongoose.model('author',Author)

module.exports = author