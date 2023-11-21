// Organization.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Organization.css'; // Import your CSS file for styling
import Header from './Header';



const Organization = () => {

    
  return (
    <div>
      <Header />
        
      <div className='btn'>
        <a
          href="https://haribon.org.ph/"
          target="_blank"
          type='button'
          style={{ display: 'block', width: '100%', textAlign: 'center' , marginBottom:'10px'}}
        >
          The Haribon Foundation
        </a>
        
        <a
          href="https://sustainableph.org/sustainableph-youth/"
          target="_blank"
          type='button'
          style={{ display: 'block', width: '100%', textAlign: 'center', marginBottom:'10px' }}
        >
          Sustainable Youth
        </a>

        <a
          href="https://www.instagram.com/savemasungimovt/"
          target="_blank"
          type='button'
          style={{ display: 'block', width: '100%', textAlign: 'center', marginBottom:'10px' }}
        >
          Save Masungi
        </a>

        <a
          href="https://www.facebook.com/youthstrike4climatePH/"
          target="_blank"
          type='button'
          style={{ display: 'block', width: '100%', textAlign: 'center', marginBottom:'10px' }}
        >
          Youth 4 Strike Climate Philippines
        </a>
         </div>
        </div>
      
  );
};

export default Organization;
