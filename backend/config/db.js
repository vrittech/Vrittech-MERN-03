const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://nirajankunwor604:XXBTRFUnzPWrpiVP@cluster0.hpf6jce.mongodb.net/";

const connDB = async () => {
   try {
      const conn = await mongoose.connect(MONGO_URI, {
         useUnifiedTopology: true,
         useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit(1);
   }
};

module.exports = connDB;
