import jwt_decode from 'jwt-decode';
import config from '../config';
import API from '../services/api';

const getRefreshToken = () => {
  return localStorage.getItem('refresh_token');
};

const setAccessTokens = tokenPayload => {

  if (tokenPayload.id_token) {
    localStorage.setItem('access_token', tokenPayload.id_token);
  }

  if (tokenPayload.refresh_token) {
    localStorage.setItem('refresh_token', tokenPayload.refresh_token);
  }
};

const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

const isTokenTimeValid = () => {
  const currentAccessToken = jwt_decode(getAccessToken());
  return currentAccessToken.exp > new Date().getTime() / 1000;
};

const cleanTokens = () => {
  localStorage.setItem('access_token', '');
  localStorage.setItem('refresh_token', '');
};

const redirectToLogin = (redirect, linkRedirect) => {
  redirect.push({
    pathname: '/',
    state: {
      link: linkRedirect
    }
  });
};

const removeFilters = () => {
  localStorage.removeItem('filterData');
};

const logout = (redirect, linkRedirect) => {
  // cleanTokens();
  // redirectToLogin(redirect, linkRedirect);
  removeFilters();
};

const refreshToken = async (snack, redirect, success) => {
  
  if (isTokenTimeValid()) {
    if (success) success();
    return;
  }

  const response = await API.post(`${config.cognito.authUrl}/refresh-token`, { refresh_token: getRefreshToken() });
  setAccessTokens(response.data.data);

  if (success) {
    success();
  }
};

export default {
  getAccessToken,
  setAccessTokens,
  redirectToLogin,
  getRefreshToken,
  cleanTokens,
  refreshToken,
  logout
};
