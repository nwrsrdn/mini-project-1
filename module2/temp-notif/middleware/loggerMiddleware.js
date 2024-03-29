const logger = require('../config/loggerConfig')

const loggerMiddleware = (req, res, next) => {
  logger.info(`Handled ${req.method} request to ${req.url} from ${req.originUrl}`)
  next()
}

module.exports = loggerMiddleware
