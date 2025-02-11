const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB succseful!');
  } catch (error) {
    console.error('MongoDB conection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
