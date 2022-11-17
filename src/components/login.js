import React from 'react';
import './login';

export default function Login() {
  return(
    <div className="login-wrapper">
      <h5>Enter your login info</h5>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label> 
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}