import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Organization.css'; // Import your CSS file for styling
import Header from './Header';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Organization = () => {
  const [popups, setPopups] = useState({
    haribonPopup: false,
    sustainableYouthPopup: false,
    // Add more popups as needed
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

  return (
    <div>
      <Header />

      <div style={{ marginTop: '5%' }}>

      <button
        onClick={() => openPopup('haribonPopup')}
        style={{ textAlign: 'left', borderRadius: '0', padding: '10px', fontSize: '20px' }}
      >
        <span style={{ marginLeft: '20px' }}>The Haribon Foundation</span>
      </button>


        {popups.haribonPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={() => closePopup('haribonPopup')}>
                &times;
              </span>
              <br />
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
                </div>


                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={require("./icon_www.png")} alt="Haribon" style={{ width: '6%', marginLeft: '20px' }} />
                  <a href="https://haribon.org.ph/" target="_blank" >https://haribon.org.ph/</a>
                </div>

          </div>
        </div>
      )}

      <button
        onClick={() => openPopup('sustainableYouthPopup')}
        style={{ textAlign: 'left', borderRadius: '0', padding: '10px', fontSize: '20px' }}
      >
        <span style={{ marginLeft: '20px' }}>Sustainable PH Youth</span>
      </button>


        {popups.sustainableYouthPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={() => closePopup('sustainableYouthPopup')}>
                &times;
              </span>
              <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={require("./sustainableYouth.png")} alt="Haribon" style={{ width: '30%' }} />
                </div>
                          
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={require("./icon_info.png")} alt="Haribon" style={{ width: '6%', marginLeft: '20px' }} />
                  <p style={{ marginLeft: '20px' }}>Provide an Avenue to Empower the Filipino Youth</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={require("./icon_call.png")} alt="Haribon" style={{ width: '6%', marginLeft: '20px' }} />
                  <a href="tel:+63284211213" target="_blank"></a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={require("./icon_email.png")} alt="Haribon" style={{ width: '6%', marginLeft: '20px' }} />
                  <a href="mailto:learn2lead@sustainableph.org">learn2lead@sustainableph.org</a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={require("./icon_www.png")} alt="Haribon" style={{ width: '6%', marginLeft: '20px' }} />
                  <a href="https://sustainableph.org/sustainableph-youth/" target="_blank" >https://sustainableph.org/sustainableph-youth/</a>
                </div>

      {/* Content for the other popup */}
    </div>
  </div>
)}

{/* Add more buttons and corresponding popups as needed */}

        
        </div>
        </div>
      
  );
};

export default Organization;
