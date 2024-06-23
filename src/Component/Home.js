// import React from 'react'
// import img2 from './img2.jpg'
// import { useNavigate } from 'react-router-dom'

// export default function Home() {
//   const navigate=useNavigate()
//   function Contact(){
//     navigate('/')
//   }
//   return (
//     <div className='size'>
//       <h1>Welcome to Training Needs Analysis System</h1>
//       <img src={'https://www.aihr.com/wp-content/uploads/training-needs-analysis-cover.png'} width={520} height={450} className='img1'/>
//       <div className='para1'>
//         <h1>About Us</h1>
//         <p>The Training Needs Analysis System is developed and maintained by a dedicated software engineer passionate about enhancing education through technology. With a focus on usability and functionality, the aim is to provide an intuitive platform for educational institutions to manage student data effectively and make informed decisions regarding training requirements.
//            <br></br>The mission is to empower administrators and educators with the tools they need to optimize student learning experiences and foster academic success. By leveraging cutting-edge technologies such as ReactJS and CSS, the goal is to deliver a seamless user experience while ensuring the security and privacy of user data.
//            <br></br>Committed to continuous improvement, feedback from users is welcomed to enhance the features and capabilities of the Training Needs Analysis System. There remains a dedication to advancing education through innovation and technology, with a vision of creating a brighter future for learners worldwide.</p>
//       </div>
//       <img src={img2} alt="" className="img2"/> 
//       <div class="contact">
//           <input type="text" placeholder="Type Your Name" className='nam5'/>
//           <input type="email" placeholder="Type Your E-Mail" className='mail5'/>
//           <textarea cols="30" rows="6" placeholder="Type Your Message" className='mess5'></textarea><br></br>
//           <button className='button5' type='submit' onClick={Contact}>Submit</button>
//       </div>
//     </div>
//   )
// }


// components/Home.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; // Importing the corresponding CSS file

// function Home() {
//   return (
//     <div className="home-container">
//       <div className="home-content">
        
//         <div className="action-buttons">
//           <Link to="/assessment" className="btn btn-primary">Start Assessment</Link>
//           <Link to="/user-details" className="btn btn-secondary">View User Details</Link>
//           <Link to="/admin-dashboard" className="btn btn-secondary">Admin Dashboard</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


// Home.js

// Home.js

// Home.js

// Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importing the corresponding CSS file
import { useAuth } from './Auth';

export default function Home() {
  const navigate = useNavigate();
  const auth=useAuth()
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Welcome to the Training Needs Analysis System</h1>
        <img src="https://www.aihr.com/wp-content/uploads/training-needs-analysis-cover.png" alt="Training Needs Analysis" className="image" />
        <div className="description">
          <p>The Training Needs Analysis System is a powerful tool designed to help organizations assess and address the training needs of their employees.</p>
          <p>Our system offers customizable assessment tools, detailed analytics, and personalized recommendations to ensure that your training programs are aligned with your organizational goals and objectives.</p>
          <p>Whether you're a small business looking to develop your team's skills or a large corporation aiming to streamline your training processes, our system is here to support you every step of the way.</p>
        </div>
        {auth.user!=='admin'&&<button className="btn" onClick={() => navigate('/assessment')}>Start Assessment</button>}
      </div>
    </div>
  );
}

