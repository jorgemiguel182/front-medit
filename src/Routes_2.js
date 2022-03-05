import React from 'react';
// import 'react-perfect-scrollbar/dist/css/styles.css';
import { Route, Switch } from 'react-router-dom';
// import './mixins/chartjs';
import { LastLocationProvider } from 'react-router-last-location';

import MainLayoutPublicRoute from './utils/routes/mainLayoutPublicRoute';
import DashboardPrivateRoute from './utils/routes/dashboardPrivateRoute';

import Login from 'src/pages/auth/Login';
import ForgotPassword from 'src/pages/auth/ForgotPassword';
import ConfirmForgotPassword from 'src/pages/auth/ConfirmForgotPassword';
import NotFoundView from './pages/errors/NotFoundView';
import pacientList from './pages/pacient/List'; 
import pacientView from './pages/pacient';
import medicalRecordsList from './pages/medicalRecords/List'; 
import evolutionsList from './pages/evolutions/List'; 
import evolutionsView from './pages/evolutions'; 
import symptomsView from './pages/evolutions/Symptom'; 
import emailView from './pages/email'; 
import usersList from './pages/users/List'; 
import userView from './pages/users'; 

export default function Routes() {
  return (
    <LastLocationProvider>
      <Switch>
        <MainLayoutPublicRoute component={Login} path="/" exact />
        <MainLayoutPublicRoute component={ForgotPassword} path="/forgot-pass" exact />
        <MainLayoutPublicRoute component={ConfirmForgotPassword} path="/confirm-forgot-pass" exact />
        <DashboardPrivateRoute component={pacientList} path="/pacients" exact />
        <DashboardPrivateRoute component={pacientView} path="/pacient/:cpf" exact />
        <DashboardPrivateRoute component={medicalRecordsList} path="/prontuarios" exact />
        <DashboardPrivateRoute component={evolutionsList} path="/evolutions/:id" exact />
        <DashboardPrivateRoute component={evolutionsView} path="/evolutions/:id/new" exact />
        <DashboardPrivateRoute component={evolutionsView} path="/evolutions/:id/edit/:evolution_id" exact />
        <DashboardPrivateRoute component={symptomsView} path="/symptoms/:id/new" exact />
        <DashboardPrivateRoute component={symptomsView} path="/symptoms/:id/edit/:symptom_id" exact />
        <DashboardPrivateRoute component={emailView} path="/emails" exact />
        <DashboardPrivateRoute component={usersList} path="/users" exact />
        <DashboardPrivateRoute component={userView} path="/users/:username" exact />
        <DashboardPrivateRoute component={userView} path="/users/new" exact />

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
