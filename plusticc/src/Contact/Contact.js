import React, { useState } from 'react';
import './Contact.css'; // Make sure to import the correct CSS file
import Header from '../Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
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
            name="fullName"
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
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <textarea
            className="contact-input" // Updated CSS class
            name="contactMessage" // Updated textarea name
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
