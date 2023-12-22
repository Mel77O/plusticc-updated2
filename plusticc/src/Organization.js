import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Organization.css';
import Header from './Header';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Organization = () => {

  const [formData, setFormData] = useState({
    id: '',
    info: '',
    num: '',
    email: '',
    url: '',
  });
  
  const [organizations, setOrganizations] = useState([]);
  const [folded, setFolded] = useState(false);
  const [deleteOrgId, setDeleteOrgId] = useState('');
  const [updateOrgId, setUpdateOrgId] = useState('');
  const [formVisible, setFormVisible] = useState(true);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make a POST request to your Spring Boot backend
      const response = await fetch('http://localhost:8080/organization/insertOrganization', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Form submitted successfully!');
        // Reset form fields
        setFormData({
          id: '',
          info: '',
          num: '',
          email: '',
          url: '',
        });
      } else {
        alert('Error submitting form. Please try again.');
        console.error('Error submitting form:', response.status);
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Error:', error.message);
    }
  };
  
  const toggleFormVisibility = () => {
    setFormVisible((prevVisible) => !prevVisible);
  };

  const handleSearchAll = async () => {
    try {
      // Make a GET request to fetch all organizations
      const response = await fetch('http://localhost:8080/organization/allOrganization');

      if (response.ok) {
        const data = await response.json();
        // Update organizations state with the fetched data
        setOrganizations(data);
      } else {
        console.error('Error fetching organizations:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleToggleFold = () => {
    setFolded((prevFolded) => !prevFolded);
  };


  const handleUpdateOrganization = async (organizationId) => {
    console.log('Updating organization:', organizationId);

    try {
      const response = await fetch(`http://localhost:8080/organization/updateOrganization/${organizationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        // You may include the updated data in the body if needed
        // body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        alert('Organization updated successfully!');
        // Fetch all organizations again after the update
        handleSearchAll();
      } else {
        const errorMessage = await response.text();
        alert(`Error updating organization: ${errorMessage}`);
        console.error('Error updating organization:', response.status, errorMessage);
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Error:', error.message);
    }
  };
  
  const handleDeleteOrganization = async (organizationId) => {
    console.log('Delete button clicked for organization:', organizationId);
    try {
      const response = await fetch(`http://localhost:8080/organization/deleteOrganization/${organizationId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Organization deleted successfully!');
        // Fetch all organizations again after the delete
        handleSearchAll();
      } else {
        const errorMessage = await response.text();
        alert(`Error deleting organization: ${errorMessage}`);
        console.error('Error deleting organization:', response.status, errorMessage);
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Error:', error.message);
    }
  };
  
  const handleDeleteInputChange = (e) => {
    setDeleteOrgId(e.target.value);
  };

  const handleUpdateInputChange = (e) => {
    setUpdateOrgId(e.target.value);
  };

  const organizationId = (e) => {
    setUpdateOrgId(e.target.value);
  };



  const [popups, setPopups] = useState({
    haribonPopup: false,
    sustainableYouthPopup: false,
    masungiPopup: false,
    youth4StrikePopup: false,
    defaultPopup: false,
  });


  const openPopup = (popupName) => {
    setPopups((prevPopups) => ({
      ...prevPopups,
      [popupName]: true,
    }));
  };

  const closePopup = (popupName) => {
    setPopups((prevPopups) => ({
      ...prevPopups,
      [popupName]: false,
    }));
  };

  
  console.log('Component rendered');
  
  return (
    <div>
      <Header />

      <div style={{ marginTop: '7%' }}>

     
      

<div style={{ display: 'flex'}}>
  {/* Left side - Form */}
  <div style={{ marginRight: '20px' , width: '2500px'}}>
    <button onClick={toggleFormVisibility}>
      {formVisible ? 'Hide Form' : 'Add New Organization'}
    </button>

    <div>
    <button onClick={() => { handleSearchAll(); handleToggleFold(); }}>
      {folded ? 'Show All Organizations' : 'Hide All Organizations'}
    </button>

    

    <div style={{  marginLeft: '1%'  }}>

 <div style={{  paddingLeft:'50' }}>
  {/* Add input for organization deletion */}
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <label htmlFor="deleteOrgId"></label>
    <input
      type="text"
      id="deleteOrgId"
      name="deleteOrgId"
      value={deleteOrgId}
      onChange={handleDeleteInputChange}
      placeholder="Organization ID"
      required
    />
    <button onClick={() => handleDeleteOrganization(deleteOrgId)}>Delete Organization</button>
  </div>

 
  
</div>
</div>


    {formVisible && (
      <form onSubmit={handleSubmit} style={{ width: '500px' }}>
        <div style={{marginLeft: '1500px', width:'500px'}}>
        
        <label htmlFor="info" >Info:</label>
        <input type="text" id="info" name="info" value={formData.info} onChange={handleInputChange} required />

        <label htmlFor="num">Number:</label>
        <input type="text" id="num" name="num" value={formData.num} onChange={handleInputChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

        <label htmlFor="url">URL:</label>
        <input type="url" id="url" name="url" value={formData.url} onChange={handleInputChange} required />
        

        <button type="submit" style={{ width: '500px' }}>Submit</button>
        </div>
      </form>
      
    )}
   
  </div>

  {/* Right side - Organization List */}
  
  <div style={{marginLeft: '800px', width:'500px'}}>
    {!folded &&
      organizations.map((org, index) => (
        <div
          key={org.id}
          className="organization-box"
          style={{ backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#e0e0e0' }}>

          {/* Display Organization ID */}
          <p>{org.id}</p>

          {/* ... (rest of the organization details) */}
          
          {org.info && (
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: '10px' }}>
                <img src={require("./icon_info.png")} alt="Organization" style={{ width: '5%' }} />
                <h3 style={{ marginLeft: '20px' }}>{org.info}</h3>
              </div>
              )}
              
              {org.num && (
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                  <img src={require("./icon_call.png")} alt="Organization" style={{ width: '5%' }} />
                  <p style={{ marginLeft: '20px' }}>Number: {org.num}</p>
                </div>
              )}

              {org.email && (
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                  <img src={require("./icon_email.png")} alt="Organization" style={{ width: '5%' }} />
                  <p style={{ marginLeft: '20px' }}>Email: {org.email}</p>
                </div>
              )}  

              {org.url && (
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                  <img src={require("./icon_www.png")} alt="Organization" style={{ width: '5%' }} />
                  <p style={{ marginLeft: '20px' }}>URL: {org.url}</p>
                </div>
              )}

          {/* Add the Update and Delete buttons */}
          {/* <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: '10px' }}>
            <button onClick={() => handleUpdateOrganization(org.id)}>Update</button>
            <button onClick={() => handleDeleteOrganization(org.id)}>X</button>
          </div> */}
        </div>
      ))}
       </div>
 </div>

      
 


</div>



<button
        onClick={() => openPopup('defaultPopup')}
        style={{ textAlign: 'left', borderRadius: '0', padding: '10px', fontSize: '20px', marginTop: '570px' }}
      >
        <span style={{ marginLeft: '20px' }}></span>
      </button>


        {popups.defaultPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={() => closePopup('defaultPopup')}>
                &times;
              </span>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={require("./haribon.png")} alt="Haribon" style={{ width: '20%' }} />
                </div>
                          
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={require("./icon_info.png")} alt="Haribon" style={{ width: '6%', marginLeft: '20px' }} />
                  <p style={{ marginLeft: '20px' }}>Foundation for the Conservation of Natural Resources Inc.</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={require("./icon_call.png")} alt="Haribon" style={{ width: '6%', marginLeft: '20px' }} />
                <a href="tel:+63284211213" target="_blank">+63 2 8421 1213</a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={require("./icon_email.png")} alt="Haribon" style={{ width: '6%', marginLeft: '20px' }} />
                <a href="haribon@gmail.com" target="_blank">haribon@gmail.com</a>
                </div>


                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={require("./icon_www.png")} alt="Haribon" style={{ width: '6%', marginLeft: '20px' }} />
                  <a href="https://haribon.org.ph/" target="_blank" >https://haribon.org.ph/</a>
                </div>

          </div>
        </div>
      )}

        
        </div>
        </div>
      
  );
};

export default Organization;
