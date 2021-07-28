import {query} from "../../config/pool";

export async function findUsers () {
    return (await query(`SELECT * FROM users WHERE id = $1`, [1]))
}
