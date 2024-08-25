import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/foodies-unite-logo-transparent.png';
import './Base.css';

const Base = () => {

  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = (path) => {
    navigate(path);
    setTimeout(() => {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="base-container">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Foodies Unite Logo" className="foodies-unite-logo" />
        </div>
        <nav className="nav-buttons">
          <button className="button" onClick={() => handleScroll('/')}>View All Creators</button>
          <button className="button" onClick={() => handleScroll('/add')}>Add a Creator</button>
        </nav>
      </header>
      <section ref={contentRef}>
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
        <div className='wave wave4'></div>
      </section>
    </div>
  );
};

export default Base;