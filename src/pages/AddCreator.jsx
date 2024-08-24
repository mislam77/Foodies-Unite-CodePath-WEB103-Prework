import React, { useState } from 'react';
import supabase from '../client';

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
    <form onSubmit={(e) => { e.preventDefault(); addCreator(); }}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
      <input value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL" />
      <button type="submit">Add Creator</button>
    </form>
  );
};

export default AddCreator;
