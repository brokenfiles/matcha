import {db_config} from "./db";
import pg from 'pg'

const pool = new pg.Pool({
    user: db_config.username,
    host: db_config.hostname,
    database: db_config.database,
    password: db_config.password,
    post: db_config.port
})

export default pool
