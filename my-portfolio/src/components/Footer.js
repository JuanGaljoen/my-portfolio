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
    <i class="fa fa-user medium-icon"></i>
    <span class="counter-title"> Viewer COUNT </span>
     <span class="timer counter alt-font appear" data-to={views} data-speed="7000">{views}</span>
   
</div>
    
  );
};


