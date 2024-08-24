import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../client';

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
    <form onSubmit={(e) => { e.preventDefault(); updateCreator(); }}>
      <input value={creator.name} onChange={(e) => setCreator({ ...creator, name: e.target.value })} required />
      <input value={creator.url} onChange={(e) => setCreator({ ...creator, url: e.target.value })} required />
      <textarea value={creator.description} onChange={(e) => setCreator({ ...creator, description: e.target.value })} required></textarea>
      <input value={creator.imageURL} onChange={(e) => setCreator({ ...creator, imageURL: e.target.value })} />
      <button type="submit">Update Creator</button>
      <button type="button" onClick={async () => {
        const { error } = await supabase
          .from('creators')
          .delete()
          .eq('id', id);
        if (error) console.error(error);
        else alert('Creator deleted!');
      }}>Delete Creator</button>
    </form>
  );
};

export default EditCreator;
