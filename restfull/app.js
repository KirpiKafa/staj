const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser= require('body-parser');
const cors = require('cors');
require("dotenv/config");

// middlewares
app.use(cors());

app.use(bodyParser.json());

// İmport routers
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

  // Routes
  app.get("/", (req, res) => {
    res.send("We are on home");
  });

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, { userNewUrlParser: true }, () =>
  console.log("Connected to DB!")
);

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

// how to we start listening to server
app.listen(3000);
