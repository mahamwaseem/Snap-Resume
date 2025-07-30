import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1B3C53' }} className="text-white py-5 mt-5">
      <div className="container">
        <div className="row text-center text-md-left">
          {/* Column 1 - Logo / About */}
          <div className="col-md-4 mb-3">
            <h5 style={{ fontFamily: "'Anton', sans-serif", fontWeight: '700' }}>SnapResume</h5>

            <p>Helping you create resumes that get noticed.</p>
          </div>



          {/* Column 3 - Contact & Social */}
          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p>Email: support@SnapResume.com</p>
            <p>Phone: +92 300 1234567</p>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaLinkedinIn />
              </a>
            </div>


          </div>
        </div>

        <hr className="bg-light" />

        <p className="text-center mb-0">Copyright &copy; {new Date().getFullYear()} SnapResume.com</p>
      </div>
    </footer>
  );
}
