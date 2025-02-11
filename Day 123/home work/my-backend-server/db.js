const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB-თან კავშირი წარმატებულია!');
  } catch (error) {
    console.error('MongoDB კავშირის შეცდომა:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
