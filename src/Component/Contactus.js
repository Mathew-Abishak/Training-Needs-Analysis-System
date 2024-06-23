// ContactUs.js

import React from 'react';
import './Contactus.css'; // Import the corresponding CSS file

function Contactus() {
  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">Contact Us</h2>
      <p className="contact-us-info">
        Have questions or feedback? We'd love to hear from you! Contact us using the information below:
      </p>
      <div className="contact-info">
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Phone:</strong> +123-456-7890</p>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
      </div>
      <div className="contact-form">
        <h3 className='mess-label' >Send us a Message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="3" columns="4" className='mess37' required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
