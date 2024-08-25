import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaEdit } from 'react-icons/fa'; // Import icons
import './Card.css';

const Card = ({ id, name, url, description, imageURL }) => {
  return (
    <div className="creator-card" style={{ backgroundImage: `url(${imageURL})` }}>
      <div className="card-icons">
        <Link to={`/view/${id}`}><FaInfoCircle /></Link>
        <Link to={`/edit/${id}`}><FaEdit /></Link>
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Visit Channel
        </a>
      </div>
    </div>
  );
};

export default Card;
