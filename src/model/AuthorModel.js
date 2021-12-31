const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;