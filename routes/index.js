const express=require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');
const taskController=require('../controllers/task_controller');
router.get('/',homeController.home);
router.post('/create',taskController.add);
router.post('/remove-item',taskController.remove);
console.log('router is loaded');
module.exports=router;
