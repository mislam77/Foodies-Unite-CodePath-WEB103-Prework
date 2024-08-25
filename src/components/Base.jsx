import React from 'react';
import logo from '../assets/images/foodies-unite-logo-transparent.png'; // Adjust path based on your folder structure
import './Base.css'; // Import the CSS file

const Base = () => {
  return (
    <div className="base-container">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Foodies Unite Logo" className="foodies-unite-logo" />
        </div>
        <nav className="nav-buttons">
        <button className='button' onClick={() => window.location.href = '/'}>View All Creators</button>
        <button className='button' onClick={() => window.location.href = '/add'}>Add a Creator</button>
        </nav>
      </header>
      <section>
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
        <div className='wave wave4'></div>
      </section>
    </div>
  );
};

export default Base;