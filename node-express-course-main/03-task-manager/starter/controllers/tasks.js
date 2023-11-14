import Task from '../models/Task.js'

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        //console.log(tasks)
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const getSingleTask = async (req, res) => {
    try {
        const { id: taskID } = req.params // = const taskID = req.params.id
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `Not found task with id: ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            return res.status(404).json({ msg: `Not found task with id: ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `Not found task with id: ${taskID}` })
        }
        res.status(202).json({ msg: `Delete successfully task : ${task}` })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

