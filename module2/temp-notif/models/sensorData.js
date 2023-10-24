const mongoose = require('mongoose')

const sensorDataSchema = new mongoose.Schema({
  timestamp: Date,
  location: String,
  temperature_celsius: Number,
  humidity_percent: Number,
  pressure_hpa: Number
})

const SensorData = mongoose.model('SensorData', sensorDataSchema);

module.exports = SensorData