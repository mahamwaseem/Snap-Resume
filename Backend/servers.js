const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const resumeRoutes = require('./routes/resumeR');
const paymentRoutes = require('./routes/payments');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', paymentRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/snapresume")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/resumes', resumeRoutes);

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
