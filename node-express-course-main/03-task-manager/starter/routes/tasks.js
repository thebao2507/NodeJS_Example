import express from "express"
import {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
} from '../controllers/tasks.js'

const router = express.Router()

router.route('/').get(getAllTasks) // = router.get('/', getAllTasks)
router.route('/').post(createTask)
router.route('/:id').get(getSingleTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)

export default router