const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const Message = require("./models/Message");

dotenv.config();

const app = express();

app.use("/uploads", express.static("uploads"));
// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes

// DB Connection
const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));