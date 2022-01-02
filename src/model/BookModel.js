const uri = process.env.MONGODB_URI;
const mongoose = require('mongoose');
mongoose.connect(uri,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false//part#2 point9
});

const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;