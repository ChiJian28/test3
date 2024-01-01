const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Todo = sequelize.define('Todo', {
    todo_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'todo_cuba',
    timestamps: false,
});


module.exports = Todo;