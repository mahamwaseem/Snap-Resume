const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  summary: String,
  experiences: [
    {
      company: String,
      title: String,
      years: String
    }
  ],
  educationList: [
    {
      school: String,
      degree: String,
      year: String
    }
  ],
  skills: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resume', ResumeSchema);
