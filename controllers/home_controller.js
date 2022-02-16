const Task=require('../models/todo');//requiring the todo Schema from models

module.exports.home=function(req,res){
   Task.find({},function(err,tasks)
   {
      if(err){
         console.log('Error in fetching tasks from db');
         return;
      }

      return res.render('home',{
         tasks_List:tasks
      });
   });
}