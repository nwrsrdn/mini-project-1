require('dotenv').config()
const express = require('express')
const connectToDB = require('./config/database')

const NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3000

connectToDB()

const app = express()

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
})