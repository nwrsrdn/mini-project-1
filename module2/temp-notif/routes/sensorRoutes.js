const { Router } = require('express')
const validateRule = require('../middleware/validatorMiddleware')
const {
  getAllSensorData,
  getSensorData,
  createSensorData,
  updateSensorData,
  deleteSensorData,
} = require('../controller/sensorController')
const {
  createSensorDataValidation,
  updateSensorDataValidation,
  deleteSensorDataValidation
} = require('../util/validations')

const router = Router()

router.get('/', getAllSensorData)

router.get('/:id', getSensorData)

router.post('/', createSensorDataValidation, validateRule, createSensorData)

router.put('/', updateSensorDataValidation, validateRule, updateSensorData)

router.delete('/', deleteSensorDataValidation, validateRule, deleteSensorData)

module.exports = router
