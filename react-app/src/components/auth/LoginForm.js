import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
import logoImg from '../../images/aniflixLogo.png'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/browse`} />;
  }

  return (
    <div className="login-wrapper">
      <div className='signup-logo'>
        <img src={logoImg} alt="" />
      </div>

      <div className='login-container'>
        <form id='login-form' onSubmit={onLogin}>
          <h1>Sign In</h1>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='login-email'>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='login-password'>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
            <button id='login-submit' type='submit'>Sign In</button>
        </form>

        <div className="login-signup-now">
          <p>New to Aniflix? <a href="">Sign up now</a></p>
        </div>
      </div>
    </div>

  );
};

export default LoginForm;
