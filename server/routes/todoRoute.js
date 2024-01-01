const express = require('express');

const { 
    getTodosForUser,
    createTodo
 } = require('../controller/todoController.js');

const router = express.Router();

router.get('/', getTodosForUser);

router.post('/', createTodo);

module.exports = router;