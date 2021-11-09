import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actionCreator from '../../Store/ActionCreator/ActionCreator';
import { useHistory } from 'react-router-dom';
import useBlur from '../Hooks/loginHook';
import classes from '../../Components/Auth/LoginPage.module.css';
const LoginPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const {
    isBlur: usernameBlur,
    blurHandler: usernameBlurHandler,
    focusHandler: usernameFocusHandler,
  } = useBlur();

  const {
    isBlur: passwordBlur,
    blurHandler: passwordBlurHandler,
    focusHandler: passwordFocusHandler,
  } = useBlur();

  const dispatch = useDispatch();
  const history = useHistory();
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const passowordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const callbackFunction = () => {
    if (localStorage.getItem('token')) {
      history.push('/welcome');
      dispatch({ type: 'LOGIN' });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if(!username||!password){
      alert("Please provide required details")
    }else{
      dispatch(
        actionCreator.loginRequest(
          { userName: username, password: password },
          callbackFunction
        )
      );
    }

    
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Username"
        type="text"
        onChange={usernameChangeHandler}
        onBlur={usernameBlurHandler}
        onFocus={usernameFocusHandler}
      />
      {usernameBlur && (
        <p className={classes.error}>Please provide user name feild</p>
      )}
      <input
        placeholder="Password"
        type="password"
        onChange={passowordChangeHandler}
        onBlur={passwordBlurHandler}
        onFocus={passwordFocusHandler}
      />
      {passwordBlur && (
        <p className={classes.error}>Please provide password feild</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
