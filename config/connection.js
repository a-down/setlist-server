const mongoose = require("mongoose");

async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    throw new Error(error)
  }
}
connectMongoDB();

module.exports = mongoose.connection;