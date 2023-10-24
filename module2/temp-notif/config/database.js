const mongoose = require('mongoose')

const connectToDB = async () => {
  const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/my_database'

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('Connected to MongoDB...')
  } catch (err) {
    console.error('Error on MongoDB', err)
    process.exit(1)
  }
}

module.exports = connectToDB
