import mongoose, {Schema} from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.MONGO_URL;

const getLogger = require("../logger");
const logger = getLogger("db");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`${connectionString}`);
    logger.log("Connected to MongoDB");
  } catch (error) {
    logger.error(error);
  }
};

connectToDatabase();




