import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI)
export const dbConnection = async () => {
   const connection = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
   })

   console.log('Mongodb connected', connection.connection.host)
}





