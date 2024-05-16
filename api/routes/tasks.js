import { Router } from 'express';
const router = Router();

import { getSpecificTask, createTask, deleteTask, updateTask, getAllTask } from '../controllers/task.js'

router.route('/').get(getSpecificTask).post(createTask);
router.route('/all').get(getAllTask);
router.route('/:id').delete(deleteTask).patch(updateTask);

export default router; 