import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import "../../styles/components/login/Login.css"

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')

const adminLoginInfo = {
    email: "test@123.com",
    password: "test1234"
}

  const handleLogin = () => {
    if (!email && !password) {
        return null
    }

    if (email === adminLoginInfo.email && password === adminLoginInfo.password) {
        navigate('/dashboard/user')
    } else {
        alert('wrong credentials')
    }
  };

  return (
    <div className="login-main-div">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
