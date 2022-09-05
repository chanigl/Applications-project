const express = require("express");
const mongoose = require("mongoose");
const useRouter = require("./routers/listApp");
const cors = require("cors");

require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hpvdd.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri);
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PORT = process.env.PORT;

app.use(express.json());
app.use(useRouter);
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1> Server  is ${PORT} <h1>`);
});

console.log(mongoose.connection.readyState);

app.listen(PORT, console.log(`server is running on port ${PORT}`));
