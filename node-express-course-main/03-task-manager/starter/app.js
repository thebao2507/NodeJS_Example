import express from 'express'
import taskRoute from './routes/tasks.js'
import connectDB from './database/connect.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = 3000

//middleware
app.use(express.json())
app.use(express.static('./public'))
//routes
// app.get('/home', (req, res) => {
//     res.send('Task Manager App')
// })
app.use('/api/v1/tasks', taskRoute)

const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`)
        })
    } catch (error) {
        console.log(`you have error ${error}`)
    }
}

startServer()