const express =require('express');

const Router=express.Router()
const USERController=require('../controller/UserControll')
Router.post('/',USERController.USERPost)
Router.get('/',USERController.get)
Router.get('/:_id',USERController.getUserById)
Router.delete('/:_id',USERController.delete)
module.exports=Router;