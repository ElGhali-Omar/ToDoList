const db = require('../models');

const createTask = async (req, res) => {
    try {
        const newTask = await db.Task.create(req.body);
        res.status(200).send(newTask);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getAllTasks = async (req, res) => {
    try {
        const tasks = await db.Task.findAll();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await db.Task.findOne({ where: { id: req.params.id } });
        res.status(200).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
};

const updateTask = async (req, res) => {
    try {
        await db.Task.update(req.body, { where: { id: req.params.id } });
        res.status(200).send({ message: 'Task updated successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteTask = async (req, res) => {
    try {
        await db.Task.destroy({ where: { id: req.params.id } });
        res.status(200).send({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};
