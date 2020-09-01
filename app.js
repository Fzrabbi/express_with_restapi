const express= require('express');
const app= express();
const mongoose =require('mongoose');
const bodypaser =require('body-parser');
require('dotenv/config');

app.use(bodypaser.json());

//import routes
const postRoute = require('./route/posts');
app.use('/posts',postRoute);

//routes
app.get('/',(req,res)=>{
    res.send('we are on home ');
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useUnifiedTopology: true , useNewUrlParser: true}, 
    () => console.log('connected to DB...!')
);

app.listen(3000);