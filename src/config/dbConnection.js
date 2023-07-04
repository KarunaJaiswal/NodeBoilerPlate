import dotenv from 'dotenv';
dotenv.config()
import mongoose from 'mongoose';
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.DATABASE_URL, connectionOptions);

export default mongoose;
