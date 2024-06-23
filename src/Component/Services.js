import React from 'react';
import './Services.css'; 
function Services() {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="service">
        <h3 className="service-title">Training Needs Assessment</h3>
        <p className="service-description">
          Our comprehensive Training Needs Assessment (TNA) helps organizations identify skill gaps and training requirements among employees.
        </p>
      </div>
      <div className="service">
        <h3 className="service-title">Custom Training Programs</h3>
        <p className="service-description">
          We develop tailor-made training programs to address specific skill deficiencies identified through the assessment process.
        </p>
      </div>
      <div className="service">
        <h3 className="service-title">Training Delivery</h3>
        <p className="service-description">
          Our experienced trainers deliver engaging and interactive training sessions, ensuring maximum knowledge retention and skill development.
        </p>
      </div>
      <div className="service">
        <h3 className="service-title">Progress Tracking</h3>
        <p className="service-description">
          We provide tools to monitor and track the progress of training participants, allowing organizations to measure the effectiveness of the training programs.
        </p>
      </div>
    </div>
  );
}

export default Services;
