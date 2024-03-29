import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(email, password));
      if (data) {
        setErrors(data)
      }
    }else {
      setErrors(['Passwords must match'])
    }

  };



  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>


      <div>

        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          className="steptwo-input"
          placeholder='Email'
        ></input>
      </div>
      <div>

        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          className="steptwo-input"
          placeholder='Password'
        ></input>
      </div>
      <div>

        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          className="steptwo-input"
          placeholder='Confirm Password'
        ></input>
      </div>
      <button className="stepone-button" type='submit'>Sign Up</button>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>
            <span className='errors'>
              {error}

            </span>
          </div>
        ))}
      </div>
    </form>
  );
};

export default SignUpForm;
