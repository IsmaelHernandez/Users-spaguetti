const express = require('express')
const port = require('../config').api.port 
const usersRouter = require('./users/users.router')
const db = require('./utils/database')

const app = express()

app.use(express.json())

db.authenticate()
    .then(() => console.log('DB Authentication Succesfully'))
    .catch((err) => console.log(err))

//? syncronizacion de las tablas
db.sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.use('/api/v1/users', usersRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
