const mongoose = require("mongoose");

const mongo_url =
  process.env.MONGO_URI ||
  "mongodb+srv://goyalashwin2002_db_user:Goyal%40123@cluster0.9jdnob5.mongodb.net/auth-db?appName=Cluster0";
mongoose
  .connect(mongo_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));
