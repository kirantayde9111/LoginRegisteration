import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './style.css';

const Loginform = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log('form data ==>', formData);
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));
    const list = Object.keys(registeredUsers);
    if (list.includes(formData.email)) {
      navigate(`/dashboard/${formData.email}`);
    } else {
      setError('You need to register first');
    }
  };


  return (
    <div className="login-container">
      <small>{error ? error : null }</small>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
<div>
        <button type="submit">Login</button>
        {/* <span><a href="Registerationform.js">Register now</a></span> */}
        <span>
            {/* Use Link to navigate to the registration form */}
            <Link to="/register">Register now</Link>
          </span>
        
        </div>
        
      </form>
    </div>
  );
};

export default Loginform;
