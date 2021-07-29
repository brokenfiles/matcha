import express from 'express'
let router = express.Router()
import pool from "../../config/pool";
import {findUsers, findUserById, createUser, removeUserById} from "./users.service";
// import {findUsers} from "./users.service";

/** Return the existing users */
router.get('/', async (req, res) => {
    return res.json(await findUsers())
})

router.get('/:id', async (req, res) => {

    if (req.params.id) {
        const result = await findUserById(req.params.id).then((data) => {
            return (data)
        }).catch((e) => {
            res.status(500)
            return ({ error: `Something went wrong! : ` + e.message })
        })
        return res.json(result)
    }
    return res.status(500).json({ error: "Something went wrong!"})
})

router.post('/', async (req, res) => {

    if (req.body.username && req.body.password)
    {
        const result = await createUser(req.body).then((data) => {
            return (data)
        }).catch((e) => {
            res.status(500)
            return ({ error: `Something went wrong! : ` + e.message })
        })
        return res.json(result)
    }

    return res.status(500).json({ error: `Something went wrong!` })
})

router.delete('/:id', async (req, res) => {

    if (req.params.id) {
        const result = await removeUserById(req.params.id).then((data) => {
            return (data)
        }).catch((e) => {
            res.status(500)
            return ({ error: `Something went wrong! : ` + e.message })
        })
        return res.json(result)
    }
    return res.status(500).json({ error: `Something went wrong!` })
})

export default router
