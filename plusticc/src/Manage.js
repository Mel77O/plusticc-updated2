import React from 'react';
import 'react-router-dom'; // Import Link from react-router-dom
import './Manage.css'; // Import your CSS file for styling

const Manage = () => {
  return (
    <div className="manageU-container">
      <div className="manage-upper-container">
        <div className="manage-upper-image" />
      </div>

      <div className="manage-lower-container">
        {/* Add your content for Type component here */}
        <h2>HATDOG</h2>
      </div>
    </div>
  );
};

export default Manage;
