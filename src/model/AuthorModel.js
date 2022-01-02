const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
mongoose.connect('mongodb+srv://Nathaniel:<password>@cluster0.pvm4q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;