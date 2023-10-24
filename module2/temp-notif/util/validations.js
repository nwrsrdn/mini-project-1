const { body } = require('express-validator')

const createSensorDataValidation = [
  body('location').trim().notEmpty().isLength({ min: 1 }),
  body('temperature_celsius').notEmpty().isFloat(),
  body('humidity_percent').notEmpty().isInt(),
  body('pressure_hpa').notEmpty().isInt(),
]

const updateSensorDataValidation = [
  body('id').trim().notEmpty().isLength({ min: 1 }),
  body('location').trim().notEmpty().isLength({ min: 1 }),
  body('temperature_celsius').notEmpty().isFloat(),
  body('humidity_percent').notEmpty().isInt(),
  body('pressure_hpa').notEmpty().isInt(),
]

const deleteSensorDataValidation = [
  body('id').trim().notEmpty().isLength({ min: 1 })
]

module.exports = {
  createSensorDataValidation,
  updateSensorDataValidation,
  deleteSensorDataValidation
}