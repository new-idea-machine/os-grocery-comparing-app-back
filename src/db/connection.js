import mongoose, {Schema} from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.MONGO_URL;
if (!connectionString) {
    throw new Error('MongoDB connection string is missing');
}


const db = await mongoose.connect(connectionString);
console.log(db);

const priceSchema = new mongoose.Schema({
    store: String,
    price: Number,
    timestamp: { type: Date, default: Date.now }
  });
  const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    prices: [priceSchema]
  });

const Product = db.model('Product', productSchema);
export default Product;


