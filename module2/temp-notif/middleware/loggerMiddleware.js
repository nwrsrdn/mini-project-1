const logger = require('../config/loggerConfig')

const loggerMiddleware = (req, res, next) => {
  logger.info(`Handled ${req.method} request from ${req.originUrl}`)
  next()
}

module.exports = loggerMiddleware
