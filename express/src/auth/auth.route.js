import express from 'express'
import {userConnection} from './auth.service'
import {findUserById} from "../users/users.service";
import jwt from 'jsonwebtoken'

let router = express.Router()

const PORT = 4000
const SECRET = 'mykey'

router.post('/login', async (req, res) => {

    const { username, password } = req.body

    if (!username || !password)
        return res.status(401).json({error: 'Connection refused'})

    const user = await userConnection(req.body)

    if (!user) {
        return res.status(401).json({error: 'Connection refused'})
    }

    const token = jwt.sign({
        id: user.id,
        username: user.username
    }, SECRET, {expiresIn: '3 hours'})

    return res.json({access_token: token})
})

router.get('/user', async (req, res) => {

    let user
    try {
        user = await findUserById(1)
        return res.json({user: user[0]})
    }
    catch (e)
    {
        return res.status(401).json({error: 'get user refused'})
    }

})

export default router
