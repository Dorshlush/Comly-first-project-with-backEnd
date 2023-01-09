const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;
mongoose.set('strictQuery', true)

const connectDB = async () => {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/comly')
    
    console.log(
      `mongoDB Connected:`.cyan.underline.bold
    )
    //Copied from the internet to allow one user to comment more than one time!!
    const client = new MongoClient('mongodb://127.0.0.1:27017/comly', { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("comly").collection("comments");
      collection.dropIndex({ name: 1 }, function(err, result) {
        client.close();
      });
    });
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
