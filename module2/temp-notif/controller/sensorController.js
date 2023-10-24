const SensorData = require('../models/sensorData')

const getAllSensorData = async (req, res, next) => {
  try {
    const sensorData = await SensorData.find()
    res.status(200).json(sensorData)
  } catch (error) {
    next(error)
  }
}

const getSensorData = async (req, res, next) => {
  try {
    const sensorData = await SensorData.findById(req.params.id)
    res.status(200).json(sensorData)
  } catch (error) {
    next(error)
  }
}

const createSensorData = async (req, res, next) => {
  try {
    const sensorData = new SensorData(req.body)
    const createdSensorData = await sensorData.save()
    res.status(201).json(createdSensorData)
  } catch (error) {
    next(error)
  }
}

const updateSensorData = async (req, res, next) => {
  try {
    const {
      id,
      location,
      temperature_celsius,
      humidity_percent,
      pressure_hpa
    } = req.body
    const updateSensorData = await SensorData.findByIdAndUpdate(id, {
      location,
      temperature_celsius,
      humidity_percent,
      pressure_hpa,
      updated_at: Date.now()
    })
    res.status(200).json(updateSensorData)
  } catch (error) {
    next(error)
  }
}

const deleteSensorData = async (req, res, next) => {
  try {
    const { id } = req.body
    const deleteSensorData = await SensorData.findByIdAndDelete(id)
    res.status(202).json(deleteSensorData)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllSensorData,
  getSensorData,
  createSensorData,
  updateSensorData,
  deleteSensorData,
}