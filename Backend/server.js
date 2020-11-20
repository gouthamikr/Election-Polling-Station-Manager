const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const Elections = require("./models/election");
const ElectionData = require("./MockData/database.json");
const dataRoutes = require("./Routes/dataRoutes");
const userRoutes = require("./Routes/userRoutes");

const app = express();

dotenv.config();

const db = mongoose.connection;

mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err, res, req) => {
    if (err) {
      console.log(err);
    } else {
      console.log("The database is connected");
    }
  }
);

db.once("open", async (req, res) => {
  if ((await Elections.countDocuments().exec()) > 0) {
    console.log("Elections Data already added in the collection");
    return;
  }

  Elections.insertMany(ElectionData)
    .then(() => console.log("Elections Data collections added Successfully"))
    .catch((err) => console.log(`Error : ${err}`));
});

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/api", dataRoutes);

const port = 5000;

app.listen(port, () => {
  console.log("The server is up and running on port " + port);
});
