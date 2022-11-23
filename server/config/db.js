const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URL);
  console.log(`MongoDb Connected:`, colors.cyan.underline.bold);
};

module.exports = connectDb;
