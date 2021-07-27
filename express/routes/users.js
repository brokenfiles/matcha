import express from 'express'
let router = express.Router()
import pool from "../config/pool";

/** Return the existing users */
router.get('/', (req, res) => {
    // sample of request
    // pool.query(`SELECT * FROM users`, [], (error, results) => {
    //     console.log(results.rows)
    // })
    res.json([{id: 1}, {id: 2}])
})

export default router
