import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import img from '../assets/illustration4.png';
import { logInUser } from '../reducers/authorizationReducer';

const Login = function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      username: username.current.value,
      password: password.current.value,
    };
    try {
      await dispatch(logInUser(credentials));
      username.current.value = '';
      password.current.value = '';
      navigate('/');
    } catch (exeption) {
      setErrorMessage(exeption.response.data.error);
      setError(true);
      setTimeout(() => {
        setErrorMessage('');
        setError(false);
      }, 120000);
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="logo">
          <img src={img} alt="medical illustration" style={{ width: '80%' }} />
        </div>
        <div className="title">Log in</div>
        {error ? <div style={{ color: 'red' }}>{errorMessage}</div> : ''}
        <form onSubmit={handleLogin}>
          <div className="formField">
            <input name="username" placeholder="username" ref={username} required />
          </div>
          <div className="formField">
            <input name="password" placeholder="password" ref={password} type="password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div>
          or <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
