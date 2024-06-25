import React, { useEffect, useState } from 'react';

const { REACT_APP_API_URL } = process.env

export const Footer = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    fetch(`${REACT_APP_API_URL}`,
      { method: 'GET' })
      .then(response => response.json())
      .then(data => setViews(data));
  }, []);

  return (
    <div>
      <i class="fa fa-user medium-icon"></i>
      <span class="counter-title"> Visitor count </span>
      <span class="timer counter alt-font appear" data-to={views} data-speed="7000">{views}</span>
    </div>

  );
};


