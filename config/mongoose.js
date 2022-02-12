const mongoose = require('mongoose'); //require the library

mongoose.connect('mongodb://localhost/todo_list_db'); //connecting the mongoose to the database
const db = mongoose.connection; //storing the connection in db

db.on('error',console.error.bind(console,'error connecting to db'));//on error

db.once('open',function()//on connection
{
    console.log('successfully connected to the database');
});