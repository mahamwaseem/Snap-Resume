// File: src/components/Testimonials.js

import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ayesha Khan",
      text: "SnapResume helped me land 3 interviews in a week! It's fast and easy to use.",
      role: "Marketing Graduate"
    },
    {
      name: "Ali Raza",
      text: "Clean templates and the PDF download is instant. Highly recommended!",
      role: "Software Engineer"
    },
    {
      name: "Sara Ahmed",
      text: "I love how simple and modern everything looks. Great experience!",
      role: "UI/UX Designer"
    }
  ];

  return (
    <section className="testimonials">
      <h2 className="testimonial-title">What Users Say</h2>
      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{review.text}"</p>
            <h4 className="testimonial-name">- {review.name}</h4>
            <p className="testimonial-role">{review.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
