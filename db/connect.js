const mongoose = require("mongoose");
const db='mongodb+srv://thirisha0416:0iqyOqqtbBabeLML@naanmudhalvan.uniha.mongodb.net/?retryWrites=true&w=majority&appName=NaanMudhalvan'
// Connect to MongoDB using the connection string

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {   
  console.log(`No connection: ${e}`);   
});
