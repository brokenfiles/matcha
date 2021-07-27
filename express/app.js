import express from 'express'
import usersRouter from './routes/users'
import bodyParser from "body-parser";
const app = express()

/** Application global middlewares */
app.use(bodyParser.json())

/** Routes */
app.use('/users', usersRouter)

/** Listen the port */
app.listen(process.env.PORT, () => {
    console.log(`Matcha app listening at http://localhost:${process.env.PORT}`)
})
