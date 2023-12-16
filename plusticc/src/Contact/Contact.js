import React, { useState } from 'react';
import './Contact.css'; // Make sure to import the correct CSS file
import Header from '../Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your Spring Boot backend
      const response = await fetch('http://localhost:8080/contact/insertContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully:', formData);
        // Reset form fields    
        setFormData({
          fname: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.error('Error submitting form:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="contact-container-custom">
      <Header />
      <div className="left-grid-custom">
        <div>
          <h2>We would love to hear from you!</h2>
          <p>
            Drop us a message if you'd like to work with us to end plastic waste,
            explore membership, opportunities, media partnerships, or other enquiries.
          </p>
        </div>
      </div>

      <div className="right-grid-custom">
        {/* Right grid with form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="contact-input" // Updated CSS class
            name="fname"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            type="email"
            className="contact-input" // Updated CSS class
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            className="contact-input" // Updated CSS class
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          <textarea
            type="textarea" // Updated type attribute
            className="contact-input" // Updated CSS class
            name="message" // Updated textarea name
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          />

          <button className="button-custom" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
