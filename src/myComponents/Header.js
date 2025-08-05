import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
          <span style={{ fontFamily: 'Anton, sans-serif', color: 'white' }}>SnapResume</span>
        </a>

        

      </div>
    </nav>
  );
}
