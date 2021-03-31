const express = require('express')

const app = express()
app.use(express.json())

app.set('port',3000)

app.use(require('./routes/user.route'))

module.exports = app