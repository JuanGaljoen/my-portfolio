import React, { useEffect, useState } from 'react';

export const Footer = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    fetch('https://pxyjmq6fo6.execute-api.af-south-1.amazonaws.com/prod',
      {method: 'GET'}) 
      .then(response => response.json())
      .then(data => setViews(data));
  }, []);

  return (
    <div>
      <h3>Visitor Count: {views}</h3>
    </div>
  );
};


