import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    path={rest.path}
    render={props => (rest.userlogin === true ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))}
  />
);

export default PrivateRouter;
