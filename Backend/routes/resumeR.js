const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Resume = require('../models/Resumes');

// POST: Save resume data
router.post('/submit', async (req, res) => {
  try {
    const userId = uuidv4();
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json({ message: 'Resume saved!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving resume.' });
  }
});

module.exports = router;
