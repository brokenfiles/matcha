import {db_config} from "./db";
import pg from 'pg'

export const pool = new pg.Pool({
    user: db_config.username,
    host: db_config.hostname,
    database: db_config.database,
    password: db_config.password,
    post: db_config.port
})

export async function query(query, params) {
    const {rows} = await pool.query(query, params)
    return rows
}
