const uri = process.env.MONGODB_URI;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Nathaniel:<password>@cluster0.pvm4q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
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