const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({   //creating the schema using mongoose
    task:{
      type:String,
      required:true
    },
    dueDate:{
      type:Date,
      required:true
    },
    label:{
     type:String,
     required:true
    }
},{
    timestamps:true
});

const Task=mongoose.model('Task',taskSchema); //storing the taskSchema in database
module.exports=Task;