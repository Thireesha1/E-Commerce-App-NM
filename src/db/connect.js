const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// Middleware
// const db = 'mongodb+srv://ecommerceapp:ecommerceapp@cluster0.uu09u33.mongodb.net/ecommerceapp?retryWrites=true&w=majority'
const db = process.env.MONGO_URI;
// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017
