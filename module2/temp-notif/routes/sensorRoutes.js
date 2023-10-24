const { Router, response } = require('express')
const SensorData = require('../models/sensorData')

const router = Router()

router.get('/', async (req, res, next) => {
  const sensorData = await SensorData.find()
  res.status(200).json(sensorData)
})

router.get('/:id', async (req, res, next) => {
  const sensorData = await SensorData.findById(req.params.id)
  res.status(200).json(sensorData)
})

router.post('/', async (req, res, next) => {
  const sensorData = new SensorData(req.body)
  const createdSensorData = await sensorData.save()
  res.status(201).json(createdSensorData)
})

module.exports = router
