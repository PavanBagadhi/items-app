import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import classes from '../Components/Header.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const history = useHistory();
  const isShowLogoutButton = useSelector((state) => state.logoutButton);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem('token');
    history.replace('/');
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(()=>{
    if(localStorage.getItem('token')){
      dispatch({type:'LOGIN'})
    }
  }, [dispatch])
  
  return (
    <nav>
      <ul>
        <li>
          {!isShowLogoutButton && <h1 className={classes.login}>Login</h1>}
        </li>
        {isShowLogoutButton && (
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Home
            </NavLink>
          </li>
        )}
        {isShowLogoutButton && (
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        )}
        {isShowLogoutButton && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
