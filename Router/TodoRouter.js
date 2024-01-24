
const express=require('express');
const TodoController=require('../Controller/TodoController');

const router=express.Router();

router.post('/',TodoController.createTodo);
router.get('/',TodoController.getTodo);
router.delete('/:id',TodoController.deleteTodo);
router.post('/sinup',TodoController.SinupTodo);
router.post('/login',TodoController.Loginuser);
router.put('/:id',TodoController.updateTodo);
router.get('/product/:id',TodoController.getUpdateProduct);
router.get('/search/:key',TodoController.searchProduct);
exports.router=router;

