import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../client';
import './EditCreator.css';

const EditCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      let { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      if (error) console.error(error);
      else setCreator(data);
    };
    fetchCreator();
  }, [id]);

  const updateCreator = async () => {
    const { error } = await supabase
      .from('creators')
      .update({ ...creator })
      .eq('id', id);
    if (error) console.error(error);
    else alert('Creator updated!');
  };

  if (!creator) return <p>Loading...</p>;

  return (
    <div className="form-container">
      <form onSubmit={(e) => { e.preventDefault(); updateCreator(); }}>
        <div>
          <label>Name:</label>
          <input value={creator.name} onChange={(e) => setCreator({ ...creator, name: e.target.value })} required />
        </div>
        <div>
          <label>URL:</label>
          <input value={creator.url} onChange={(e) => setCreator({ ...creator, url: e.target.value })} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={creator.description} onChange={(e) => setCreator({ ...creator, description: e.target.value })} required></textarea>
        </div>
        <div>
          <label>Image URL:</label>
          <input value={creator.imageURL} onChange={(e) => setCreator({ ...creator, imageURL: e.target.value })} />
        </div>
        <button className="edit-button" type="submit">Update Creator</button>
        <button
          type="button"
          className="delete-button"
          onClick={async () => {
            const { error } = await supabase
              .from('creators')
              .delete()
              .eq('id', id);
            if (error) console.error(error);
            else alert('Creator deleted!');
          }}
        >
          Delete Creator
        </button>
      </form>
    </div>
  );
};

export default EditCreator;