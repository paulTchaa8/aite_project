const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connexion OK')
  } catch (error) {
    console.error('Erreur connexion:', error)
    process.exit(1)
  }
}

module.exports = connectDB
