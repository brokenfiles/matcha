// require('dotenv').config()

/** This file contains all database credentials */
export const db_config = {
    hostname: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}
