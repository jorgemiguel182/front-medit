<<<<<<< HEAD
import React from 'react';
import { Route } from 'react-router-dom';
import userService from '../../services/user.service';
import AuthService from '../../auth/auth.service';
import NotAuthorized from '../../auth/NotAuthorized';
import DashboardLayout from '../../layouts/DashboardLayout';

const DashboardPrivateRoute = ({ component: Component, ...rest }) => {
  const privateContent = (
    <Route
      {...rest}
      render={props => (
        <DashboardLayout>
          <Component {...props} key={Date.now()} />
        </DashboardLayout>
      )}
    />
  );
  if (!AuthService.getAccessToken()) {
    return <NotAuthorized />;
  }

  const { mustHaveRole } = rest;
  if (mustHaveRole && !userService.hasRole(mustHaveRole)) {
    return <NotAuthorized />;
  }
  return privateContent;
};

export default DashboardPrivateRoute;
=======
import React from 'react';
import { Route } from 'react-router-dom';
import userService from '../../services/user.service';
import AuthService from '../../auth/auth.service';
import NotAuthorized from '../../auth/NotAuthorized';
import DashboardLayout from '../../layouts/DashboardLayout';

const DashboardPrivateRoute = ({ component: Component, ...rest }) => {
  const privateContent = (
    <Route
      {...rest}
      render={props => (
        <DashboardLayout>
          <Component {...props} key={Date.now()} />
        </DashboardLayout>
      )}
    />
  );
  if (!AuthService.getAccessToken()) {
    return <NotAuthorized />;
  }

  const { mustHaveRole } = rest;
  if (mustHaveRole && !userService.hasRole(mustHaveRole)) {
    return <NotAuthorized />;
  }
  return privateContent;
};

export default DashboardPrivateRoute;
>>>>>>> 9884c39db954c1951e3286d14e4fe7e6c6b89e21
