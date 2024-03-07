// App.js
import React, { useState } from 'react';

import style from './style.css';

function Registerationform() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    collegename:'',
    principlename:'',
    collegeaddress:'',
    studentaddress:'',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      username: '',
      email: '',
      collegename:'',
      principlename:'',
      collegeaddress:'',
      studentaddress:'',
      password: ''
    });
  };

  return (
    <div className="container">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegename">College Name</label>
          <input
            type="collegename"
            id="collegename"
            name="collegename"
            value={formData.collegename}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="principlename">Principle Name</label>
          <input
            type="text"
            id="principlename"
            name="principlename"
            value={formData.principlename}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="collegeaddress">College Address</label>
          <input
            type="text"
            id="collegeaddress"
            name="collegeaddress"
            value={formData.collegeaddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentaddress">Student Address</label>
          <input
            type="text"
            id="studentaddress"
            name="studentaddress"
            value={formData.studentaddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fileupload">Student Passport</label>
          <input
            type="file"
            id="fileupload"
            name="fileupload"
            value={formData.fileupload}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registerationform;
