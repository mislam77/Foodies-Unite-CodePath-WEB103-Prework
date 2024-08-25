import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../client';
import './ViewCreator.css';

const ViewCreator = () => {
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

  return (
    <div className="view-creator">
      {creator ? (
        <>
          <h2>{creator.name}</h2>
          <p>{creator.description}</p>
          <a href={creator.url} target="_blank" rel="noopener noreferrer">
            Visit Channel
          </a>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewCreator;