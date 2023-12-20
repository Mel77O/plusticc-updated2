import React from 'react';
import 'react-router-dom'; // Import Link from react-router-dom
import './Type.css'; // Import your CSS file for styling

const Type = () => {
  return (
    <div className="typeU-container">
      <div className="type-upper-container">
        <div className="type-upper-image" />
      </div>

      <div className="type-lower-container">
        {/* Add your content for Type component here */}
        <h2>HATDOG</h2>
      </div>
    </div>
  );
};

export default Type;
