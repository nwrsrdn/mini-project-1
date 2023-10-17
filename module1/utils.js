const { join } = require('path')
const { readFileSync } = require('fs')

const CERT = join(__dirname, 'certificate.pem')
const KEY = join(__dirname, 'private-key.pem')
const FILE = join(__dirname, 'metrics.csv')

const getFileData = (file) => {
    return readFileSync(file, 'utf-8')
  }

const transformData = (data) => {
  const contentsArray = data.split(/\r?\n/)
  const headers = contentsArray.shift().split(',')
  const contentsToJson = contentsArray.map(csvToJson)

  return contentsToJson
}

const csvToJson = (arr) => {
  const data = arr.split(',')
  return {
    rank: data[0],
    country: data[1],
    score: data[2],
    gdp: data[3],
    social_support: data[4],
    life_expectancy: data[5],
    freedom: data[6],
    generosity: data[7],
    corruption: data[8]
  }
}

module.exports = {
  CERT,
  KEY,
  FILE,
  getFileData,
  transformData,
  csvToJson
}
