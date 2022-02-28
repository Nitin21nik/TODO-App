const express = require('express');//require express library
const path=require('path');
const port = process.env.PORT || 8000;//initialize the port number

const db=require('./config/mongoose');//acessing the database
var tasks_List=[{
    task:"add a task",
    dueDate:"No deadline",
    label:" "
}]

const app = express();//initiating the express server

app.use(express.urlencoded({extended:true}));//Middleware for accessing the request body 

app.set('view engine','ejs');//setting the view engine

app.set('views',path.join(__dirname,'views'));//joining the current directory with views

app.use('/',require('./routes'));//Middleware for routes

app.use(express.static('assets'));// Middleware for setting the static files

app.listen(port, function(err) {   //running the server
    if (err) {
        console.log(`error in running the server:${err}`);
    }
    console.log(`server is up and running on port:${port}`);
});

