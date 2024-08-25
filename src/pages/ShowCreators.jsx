import React, { useState, useEffect } from 'react';
import supabase from '../client';
import Card from '../components/Card';
import './ShowCreators.css';

const ShowCreators = () => {
  const [creators, setCreators] = useState(null);

  useEffect(() => {
    const fetchCreators = async () => {
      let { data, error } = await supabase.from('creators').select('*');
      if (error) console.error(error);
      else setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div className="show-creators">
      {creators && creators.length > 0 &&
        creators.map((creator) => (
          <Card key={creator.id} {...creator} />
        ))
      }
    </div>
  );
};

export default ShowCreators;