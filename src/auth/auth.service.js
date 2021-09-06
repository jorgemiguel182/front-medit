import jwt_decode from 'jwt-decode';

const getRefreshToken = () => {
  return localStorage.getItem('refresh_token');
};

const setAccessTokens = tokenPayload => {
  if (tokenPayload.idToken) {
    localStorage.setItem('access_token', tokenPayload.idToken);
  }

  if (tokenPayload.refreshToken) {
    localStorage.setItem('refresh_token', tokenPayload.refreshToken);
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
  cleanTokens();
  redirectToLogin(redirect, linkRedirect);
  removeFilters();
};

const refreshToken = async (snack, redirect, success) => {

  if (isTokenTimeValid()) {
    if (success) success();
    return;
  }
  const response = await API.post(`${config.cognito.authUrl}/refresh-token`, { refreshToken: getRefreshToken() },
    {
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      }
    }
  );
  setAccessTokens(response.data);
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
