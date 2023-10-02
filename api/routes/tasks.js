const express = require('express')
const router = express.Router();
const { getSpecificTask, createTask, deleteTask, updateTask, getAllTask } = require('../controllers/task');
router.route('/').get(getSpecificTask).post(createTask);
router.route('/all').get(getAllTask);
router.route('/:id').delete(deleteTask).patch(updateTask);

module.exports = router; 