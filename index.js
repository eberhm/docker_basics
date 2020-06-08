const express = require('express')
const app = express()
const port  = process.env.PORT || 3000
const environment = process.env.APP_ENV || 'limbo'

app.get('/', (req, res) => res.send(`Helloooo World!, I'm in ${environment}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))