import {query} from "../../config/pool";

export async function findUsers () {
    return (await query(`SELECT * FROM users`))
}

/* throw exception on error */
export async function findUserById (id) {

    if (isNaN(id))
        throw Error("Is not a number")
    return (await query(`SELECT * FROM users WHERE id = $1`, [id]))
}

export async function createUser (params) {
    const { username, password } = params
    return (await query(`INSERT INTO users(username, password) VALUES($1, $2) RETURNING *`, [username, password]))
}

export async function removeUserById (id) {

    const user = await findUserById(id)
    return await query(`DELETE FROM users WHERE id = $1`, [id]).then(() => {
        return user
    })
}