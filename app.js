const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

const app = new express; 

app.set('view engine','ejs'); 
app.set('views','./src/views'); 

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 
const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter')(nav);
const booksRouter = require('./src/routes/booksroute')(nav);
const authorsRouter = require('./src/routes/authorsroute')(nav);






app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});




app.listen(PORT,()=>{
    console.log(`Server Ready on ${PORT}`);
});