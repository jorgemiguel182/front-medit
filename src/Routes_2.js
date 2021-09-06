import React from 'react';
// import 'react-perfect-scrollbar/dist/css/styles.css';
import { Route, Switch } from 'react-router-dom';
// import './mixins/chartjs';
import { LastLocationProvider } from 'react-router-last-location';

import MainLayoutPublicRoute from './utils/routes/mainLayoutPublicRoute';
import DashboardPrivateRoute from './utils/routes/dashboardPrivateRoute';

import Login from 'src/pages/auth/Login';
import NotFoundView from './pages/errors/NotFoundView';
import pacientList from './pages/pacient/List'; 
import emailView from './pages/email'; 

export default function Routes() {
  return (
    <LastLocationProvider>
      <Switch>
        <MainLayoutPublicRoute component={Login} path="/" exact />
        <DashboardPrivateRoute component={pacientList} path="/pacients" exact />
        <DashboardPrivateRoute component={emailView} path="/emails" exact />

        {/* <MainLayoutPublicRoute component={LoginView} path="/login" exact />
        <MainLayoutPublicRoute
          component={ChangePasswordView}
          path="/change-password"
          exact
        />
        <MainLayoutPublicRoute
          component={ForgotPasswordView}
          path="/reset-password"
          exact
        />
        <DashboardPrivateRoute
          component={DashboardPanel}
          path="/dashboardPanel"
          // mustHaveRole="dashboard"
          exact
        />
       
        <DashboardPrivateRoute
          component={AnaliseAnunciosListView}
          path="/salesAdAnalysis"
          exact
          mustHaveRole="sales_ad_analysis"
        /> */}
        <Route component={NotFoundView} />
      </Switch>
    </LastLocationProvider>
  );
}
