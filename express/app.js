import express from 'express'
import cors from 'cors';
import usersRouter from './src/users/users.route'
import sessionRouter from './src/auth/auth.route'
import bodyParser from "body-parser";
const app = express()
const allowedOrigins = ['http://localhost:3000'];

const options = cors.CorsOptions = {
    origin: allowedOrigins
};
/** Application global middlewares */
app.use(bodyParser.json())

/** Routes */
app.use(cors(options))
app.use('/users', usersRouter)
app.use('/auth', sessionRouter)
/** allow multipart */
// app.use(express.urlencoded({
//     extended: true
// }))

/** Listen the port */
app.listen(process.env.PORT, () => {
    console.log(`Matcha app listening at http://localhost:${process.env.PORT}`)
})
