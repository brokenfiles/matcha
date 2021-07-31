import {query} from "../../config/pool";

export async function userConnection (body) {

    let { username, password } = body

    return query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password]).then((data) => {
        return data[0];
    }).catch(e => {
        return null
    })
}