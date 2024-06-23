import React from 'react';
import './Nomatch.css'; 

function Nomatch() {
  return (
    <div className="error-container">
      <h1 className="error-heading">404 - Page Not Found</h1>
      <p className="error-message">
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
}

export default Nomatch;
