const express = require('express');//require express library
const port = 8000;//initialize the port number

const db=require('./config/mongoose');
const app = express();//initiating the express server


app.listen(port, function(err) {   //running the server
    if (err) {
        console.log(`error in running the server:${err}`);
    }
    console.log(`server is up and running on port:${port}`);
});