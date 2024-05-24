import React from 'react';

function Navbar({ onSectionChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <a className="navbar-brand" href="/">
      <img src="/logo.png" alt="Logo" style={{ width: '60px', height: '60px' }} />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => onSectionChange('work')}>Work</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => onSectionChange('skills')}>Skills</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
