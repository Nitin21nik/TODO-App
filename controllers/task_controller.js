const Task = require('../models/todo');//requiring the todo Schema from models

module.exports.add = function (req, res) { //controller action to add to the todo list
    console.log(req.body);            //accessing the request body using Middleware
    Task.create({
        task: req.body.taskName,
        dueDate:req.body.date,
        label: req.body.label
    }, function (err, newTask) {
        if (err) {
            console.log('error in creating a new task');
            return;
        }
        console.log('*****', newTask);
        return res.redirect('back');
    });
}


module.exports.remove = function (req, res) //controller action for deleting the items from todo-list
{
    const checkedTaskId = req.body.check;
    console.log(checkedTaskId);
    Task.findByIdAndRemove(checkedTaskId, function (err) {
        if (!err) {
            console.log("Successfully deleted the checked task");
            return res.redirect('back');
        }
    });
}