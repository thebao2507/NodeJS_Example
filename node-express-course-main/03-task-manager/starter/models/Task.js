import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxLength: [20, 'can not write more']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('Task', TaskSchema)