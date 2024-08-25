import React, { useState } from 'react';
import supabase from '../client';
import './AddCreator.css';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const addCreator = async () => {
    const { data, error } = await supabase
      .from('creators')
      .insert([{ name, url, description, imageURL }]);
    if (error) console.error(error);
    else alert('Creator added!');
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => { e.preventDefault(); addCreator(); }}>
        <div>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        </div>
        <div>
          <label>URL:</label>
          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
        </div>
        <div>
          <label>Image URL:</label>
          <input value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL" />
        </div>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
};

export default AddCreator;