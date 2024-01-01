const Todo = require('../models/todo');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const getTodosForUser = async (req, res) => {
    try {
        const allTodos = await Todo.findAll();
        const sqlQuery = 
        `
        SELECT * FROM todo_cuba
        `;

        const result = await sequelize.query(sqlQuery, {
            type: QueryTypes.SELECT,
        });
        // console.log(result);

        return res.status(200).json({ allTodos });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

const createTodo = async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await Todo.create({ description });        //add to Todo table
        return res.status(201).send(newTodo);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getTodosForUser,
    createTodo
};