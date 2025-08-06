const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const resumeRoutes = require('./routes/resumeR');
app.use('/api/resumes', resumeRoutes);
// servers.js (top area, after app is created)
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.originalUrl);
  next();
});


app.use('/api/payments', require('./routes/payments'));

mongoose.connect("mongodb://127.0.0.1:27017/snapresume")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
