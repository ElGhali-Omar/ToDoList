const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/createTask', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/task/:id', taskController.getTaskById);
router.put('/updateTask/:id', taskController.updateTask);
router.delete('/deleteTask/:id', taskController.deleteTask);

module.exports = router;
