const { Router, response } = require('express')
const SensorData = require('../models/sensorData')

const router = Router()

router.get('/', async (req, res, next) => {
  const sensorData = await SensorData.find()
  res.status(200).json(sensorData)
})

module.exports = router
