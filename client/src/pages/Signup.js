import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../reducers/authorizationReducer';

const Signup = function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();
  const name = useRef();
  const [error, setError] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const credentials = {
      username: username.current.value,
      name: name.current.value,
      password: password.current.value,
    };
    try {
      await dispatch(signupUser(credentials));
      username.current.value = '';
      name.current.value = '';
      password.current.value = '';
      navigate('/login');
    } catch (exeption) {
      // eslint-disable-next-line no-console
      console.log(exeption);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 120000);
    }
  };

  return (
    <div className="signUp">
      <div className="signUpWrapper">
        <div className="title">Sign Up</div>
        {error ? <div style={{ color: 'red' }}>Username already chosen</div> : ''}
        <form onSubmit={handleSignUp}>
          <div className="formField">
            <input name="username" placeholder="username" ref={username} required />
          </div>
          <div className="formField">
            <input name="name" placeholder="First and Last Name" ref={name} required />
          </div>
          <div className="formField">
            <input name="password" placeholder="password" ref={password} type="password" required />
          </div>
          <button type="submit">create</button>
        </form>
        <div>
          or <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
