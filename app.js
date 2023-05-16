// app.js
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const JWT = require("jsonwebtoken");

// routes
const carers = require("./backend/routes/carers");
const residents = require("./backend/routes/residents");
const tokensRouter = require("./backend/routes/tokens");
const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
require("dotenv").config()

// middleware function to check for valid tokens
const tokenChecker = (req, res, next) => {
  let token;
  const authHeader = req.get("Authorization");

  if (authHeader) {
    token = authHeader.slice(7);
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      res.status(401).json({ message: "auth error" });
    } else {
      req.user_id = payload.user_id;
      next();
    }
  });
};

// use Routes
app.use("/residents", residents);
app.use("/carers", carers);
app.use("/tokens", tokensRouter);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
