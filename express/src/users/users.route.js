import express from 'express'
let router = express.Router()
import pool from "../../config/pool";
import {findUsers} from "./users.service";
// import {findUsers} from "./users.service";

/** Return the existing users */
router.get('/', async (req, res) => {
    return res.json(await findUsers())
})

export default router
