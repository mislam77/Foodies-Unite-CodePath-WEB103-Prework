import React from 'react';

const Card = ({ name, url, description, imageURL }) => {
  return (
    <div className="creator-card">
      {imageURL && <img src={imageURL} alt={`${name}'s image`} />}
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit Channel
      </a>
    </div>
  );
};

export default Card;
