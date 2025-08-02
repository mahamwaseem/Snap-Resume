import React, { useState } from 'react';
import './ResumeBuilder.css';
import html2pdf from 'html2pdf.js';
import axios from 'axios';


export default function ResumeBuilder() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [experiences, setExperiences] = useState([{ company: '', title: '', years: '' }]);
  const [educationList, setEducationList] = useState([{ school: '', degree: '', year: '' }]);
  const [skills, setSkills] = useState('');

  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, { company: '', title: '', years: '' }]);
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...educationList];
    newEducation[index][field] = value;
    setEducationList(newEducation);
  };

  const addEducation = () => {
    setEducationList([...educationList, { school: '', degree: '', year: '' }]);
  };

  const handleDownload = () => {
    const element = document.querySelector('.resume-preview'); // 👈 ONLY resume content
    html2pdf().from(element).save('My_Resume.pdf');
  };

  const handleSubmitToBackend = async () => {
    try {
      const data = {
        name,
        email,
        summary,
        experiences,
        educationList,
        skills
      };
      await axios.post('http://localhost:5000/api/resumes/submit', data);
      alert('Resume saved successfully!');
    } catch (error) {
      console.error(error);
      alert('Error saving resume');
    }
  };

  return (
    <div className="builder-container">
      <div className="form-section">
        <h2 className="builder-heading">Resume Builder</h2>

        <label>Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Summary</label>
        <textarea value={summary} onChange={(e) => setSummary(e.target.value)} />

        <h3>Work Experience</h3>
        {experiences.map((exp, index) => (
          <div key={index}>
            <input
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
            />
            <input
              placeholder="Job Title"
              value={exp.title}
              onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
            />
            <input
              placeholder="Years"
              value={exp.years}
              onChange={(e) => handleExperienceChange(index, 'years', e.target.value)}
            />
          </div>
        ))}
        <button onClick={addExperience}>+ Add Experience</button>

        <h3>Education</h3>
        {educationList.map((edu, index) => (
          <div key={index}>
            <input
              placeholder="School"
              value={edu.school}
              onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
            />
            <input
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            />
            <input
              placeholder="Year"
              value={edu.year}
              onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
            />
          </div>
        ))}
        <button onClick={addEducation}>+ Add Education</button>

        <h3>Skills</h3>
        <input
          placeholder="e.g., JavaScript, React, CSS"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button onClick={handleSubmitToBackend} className="save-btn">
          Save
        </button>

      </div>

      {/* Separate Preview Container */}
      <div className="preview-header">
        <h2 className="preview-title">Live Preview</h2>
      </div>

      {/* This is the actual content to be downloaded */}
      <div className="resume-preview">
        <div className="preview-content">
          <h3 className="preview-name">{name}</h3>
          <p className="preview-email">{email}</p>
          <p className="preview-summary"><strong>Summary:</strong> {summary}</p>

          <div className="preview-block">
            <h4>Experience</h4>
            <ul>
              {experiences.map((exp, idx) => (
                <li key={idx}>{exp.title} at {exp.company} ({exp.years})</li>
              ))}
            </ul>
          </div>

          <div className="preview-block">
            <h4>Education</h4>
            <ul>
              {educationList.map((edu, idx) => (
                <li key={idx}>{edu.degree}, {edu.school} ({edu.year})</li>
              ))}
            </ul>
          </div>

          <div className="preview-block">
            <h4>Skills</h4>
            <p>{skills}</p>
          </div>
        </div>
      </div>

      <button onClick={handleDownload} className="download-btn">Download PDF</button>
    </div>
  );
}
