const mongoose = require("mongoose");
const db= 'mongodb+srv://jananim1403:JananiMaha2030@janani-1.s3tqh.mongodb.net/NM-Grocery-Main?retryWrites=true&w=majority&appName=Janani-1'
// Connect to MongoDB using the connection string

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {   
  console.log(`No connection: ${e}`);   
});
