const express = require('express')
require('supertest')
require('dotenv').config();
require('./db/connection')
const userRouter = require('./routes/users')
const app = express()
app.use(express.json())
app.use(userRouter)

module.exports = app