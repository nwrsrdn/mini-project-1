const mongoose = require('mongoose')
const logger = require('../config/loggerConfig')
const sendEmail = require('../util/sendEmail')

const sensorDataSchema = new mongoose.Schema({
  timestamp: Date,
  updated_at: Date,
  location: String,
  temperature_celsius: Number,
  humidity_percent: Number,
  pressure_hpa: Number
})

const SensorData = mongoose.model('SensorData', sensorDataSchema);

module.exports = SensorData