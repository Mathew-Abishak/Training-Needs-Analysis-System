import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Assessment.css';
import { useAuth } from './Auth';

function Assessment() {
  const [userData, setUserData] = useState({ name: '' });
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const[mark,setMark]=useState(0)
  const[sug,setSug]=useState('')
  const[post,setPost]=useState([])
  const auth=useAuth();
  const name=auth.user;

  const questions = [
    { id: 1, text: 'Question 1: Is React a JavaScript library?', answer: 'Yes' },
    { id: 2, text: 'Question 2: Does CSS stand for Cascading Style Sheets?', answer: 'Yes' },
    { id: 3, text: 'Question 3: Does HTML stand for HyperText Markup Langauge?', answer: 'Yes' },
    { id: 4, text: 'Question 4: Is JSX a syntax extension for JavaScript?', answer: 'Yes' },
    { id: 5, text: 'Question 5: Is Flexbox a layout model in CSS?', answer: 'Yes' },
    { id: 6, text: 'Question 6: Does "alt" attribute present in the <img> tag?', answer: 'Yes' },
    { id: 7, text: 'Question 7: Does HTML5 support native audio and video elements?', answer: 'Yes' },
    { id: 8, text: 'Question 8: Can you nest a <div> element inside a <span> element?', answer: 'Yes' },
    { id: 9, text: 'Question 9: Is CSS Grid a two-dimensional layout system?', answer: 'Yes' },
    { id: 10, text: 'Question 10: Does the CSS "box-shadow" property allow you to add shadows to elements?', answer: 'Yes' }
  ];

  useEffect(()=>{
    axios.get("http://localhost:3001/students")
    .then(res=>{setPost(res.data)})
    .catch(err=>console.log(err))
  })

  const handleInputChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = async () => {
    try {
      const marks = calculateMarks(answers);
      const student = auth.user;
      if (student) {
        await updateMarks(userData.name, marks);
        setSubmitted(true);
      } else {
        setValidationErrors(['Student not found']);
      }
    } catch (error) {
      console.error('Failed to submit assessment:', error);
      setValidationErrors(['Failed to submit assessment']);
    }
    check()
  };
  
  function check(){
    if(mark<5){
      axios.put(`http://localhost:3001/students/${name}`,
      {
          "suggested":"Needed"
      })
      .then(res=>console.log(res))
      .catch(err=>(console.log(err)))
    }
    else{
      axios.put(`http://localhost:3001/students/${name}`,
      {
          "suggested":"Not Needed"
      })
      .then(res=>console.log(res))
      .catch(err=>(console.log(err)))
    }
  }

  const calculateMarks = (answers) => {
    let marks = 0;
    questions.forEach((question) => {
      const userAnswer = answers[question.id];
      if (userAnswer && userAnswer === question.answer) {
        marks += 1;
      }
    });
    return marks;
  };

  const getStudent = async (name) => {
    try {
      const response = await axios.get(`http://localhost:3001/students?name=${name}`);
      return response.data[0]; // Assuming name is unique
    } catch (error) {
      throw new Error('Failed to get student');
    }
  };

  const updateMarks = async (name, marks) => {
    try {
      const student = await getStudent(name);
      const updatedStudent = { ...student, marks: marks };
      await axios.put(`http://localhost:3001/students/${student.id}`, updatedStudent);
    } catch (error) {
      throw new Error('Failed to update marks');
    }
  };

  if (submitted) {
    return (
      <div className="assessment-container">
        <h2 className="assessment-title">Assessment Submitted Successfully</h2>
      </div>
    );
  }

  return (
    <div className="assessment-container">
      <h2 className="assessment-title">Technical Assessment</h2>
      <div className="user-details">
        <label className="label">Name : {auth.user}</label>
      </div>
      {questions.map((question) => (
        <div className="question" key={question.id}>
          <label className="label">{question.text}</label>
          <select onChange={(e) => handleAnswerChange(question.id, e.target.value)} className="select-field">
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      ))}
      {validationErrors.length > 0 && (
        <div className="validation-errors">
          {validationErrors.map((error, index) => (
            <p key={index} className="error-message">{error}</p>
          ))}
        </div>
      )}
      <button onClick={handleSubmit} className="btn submit-btn">Submit Assessment</button>
    </div>
  );
}

export default Assessment;
