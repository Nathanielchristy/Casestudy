const uri = process.env.MONGODB_URI;
const mongoose = require('mongoose');
mongoose.connect(uri);
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;