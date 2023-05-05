// app.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const carers = require('./backend/routes/api/carers');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/carers', carers);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));