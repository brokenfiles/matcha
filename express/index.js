const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('bonjour les amis')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
