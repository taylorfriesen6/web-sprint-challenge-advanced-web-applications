import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [form, setForm] = useState({username: '', password: ''}); // REMOVE CREDENTIALS LATER!
  const history = useHistory();

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    Axios.post('http://localhost:5000/api/login', form)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        history.push('/bubbles');
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form data-testid="loginForm" className="login-form" onSubmit={handleSubmit}>
        <h2>Build login form here</h2>
        <label>Username: <input type='text' data-testid='username' name='username' value={form.username} onChange={handleChange}/></label>
        <label>Password: <input type='password' data-testid='password' name='password' value={form.password} onChange={handleChange}/></label>
        <input type='submit' value='Log in' />
      </form>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.