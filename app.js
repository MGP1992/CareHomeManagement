// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes


const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));