const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.json());

const resumeRoutes = require('./routes/resumeR');
app.use('/api/resumes', resumeRoutes);
app.use('/api/payments', require('./routes/payments'));

mongoose.connect("mongodb://127.0.0.1:27017/snapresume")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
