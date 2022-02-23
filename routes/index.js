const express=require('express'); //requiring the already created express instance
const router=express.Router();// requiring the express router

const homeController=require('../controllers/home_controller');
const taskController=require('../controllers/task_controller');
//adding contollers to the routes
router.get('/',homeController.home); 
router.post('/create',taskController.add);
router.post('/remove-item',taskController.remove);
console.log('router is loaded');
module.exports=router; //exporting the router
