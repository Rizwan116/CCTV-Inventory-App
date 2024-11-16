import React from 'react';
import { useParams } from 'react-router-dom';

const ComingSoon = () => {
  const { id } = useParams(); // Get the dynamic part of the URL (1, 2, 3, 4)

  return (
    <div className="coming-soon">
      <h2>Coming Soon - Feature {id}</h2>
      <p>This feature is coming soon. Stay tuned!</p>
    </div>
  );
};

export default ComingSoon;
