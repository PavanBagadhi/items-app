import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRouter = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Redirect to="/welcome" />;
        } else {
          return <Component />;
        }
      }}
    />
  );
};


export default PublicRouter;
