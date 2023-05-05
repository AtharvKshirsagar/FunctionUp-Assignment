const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb://localhost:27017/scheduler', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected');
    return connection;
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = { connectToMongoDB };
