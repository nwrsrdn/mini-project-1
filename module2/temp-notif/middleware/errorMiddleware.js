const logger = require('../config/loggerConfig')

const ErrorHandling = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stackTrace: err.stack
  })
  logger.error(`${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
}

module.exports = ErrorHandling
