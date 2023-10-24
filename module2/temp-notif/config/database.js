const mongoose = require('mongoose')
const SensorData = require('../models/sensorData')
const sendEmail = require('../util/sendEmail')

const connectToDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/my_database'

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    SensorData.watch().on('change', (data) => {
      if (data.temperature_celsius > 40) {
        console.log('Sending email notification...')
        sendEmail()
      }
    })
    console.log('Connected to MongoDB...')
  } catch (err) {
    console.error('Error on MongoDB', err)
    process.exit(1)
  }
}

module.exports = connectToDB
