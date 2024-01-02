const express = require('express')
const db = require('../models')
const route = express.Router()

// * Create a task
route.post('/createTask', (req, res, next) => {
    db.Task.create(req.body)
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})

// * Get all tasks
route.get('/tasks', (req, res, next) => {
    db.Task.findAll()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})

// * Get a task by its 'id'
route.get('/task/:id', (req, res, next) => {
    db.Task.findOne({ where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})

// * edit a task
route.put('/editTask/:id', (req, res, next) => {
    db.Task.update(req.body, { where: {id: req.params.id} })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))
})

// * delete a task
route.delete('/deleteTask/:id', (req, res, next) => {
    db.Task.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).send({ message: 'Task deleted successfully' }))
    .catch((err) => res.status(400).send(err))
})

module.exports = route