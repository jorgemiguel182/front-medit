import jwt_decode from 'jwt-decode';

const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

const setAccessTokens = tokenPayload => {
  if (tokenPayload.idToken) {
    localStorage.setItem('accessToken', tokenPayload.idToken);
  }

  if (tokenPayload.refreshToken) {
    localStorage.setItem('refreshToken', tokenPayload.refreshToken);
  }
};

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

const isTokenTimeValid = () => {
  const currentAccessToken = jwt_decode(getAccessToken());
  return currentAccessToken.exp > new Date().getTime() / 1000;
};

const cleanTokens = () => {
  localStorage.setItem('accessToken', '');
  localStorage.setItem('refreshToken', '');
};

const redirectToLogin = (redirect, linkRedirect) => {
  redirect.push({
    pathname: '/login',
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
  console.log("ENTREI REFRESH TOKEN")
  // if (isTokenTimeValid()) {
  //   if (success) success();
  //   return;
  // }
  // const response = await API.post(
  //   `${config.cognito.authUrl}/refresh-token`,
  //   { refreshToken: getRefreshToken() },
  //   {
  //     headers: {
  //       Accept: '*/*',
  //       'Content-Type': 'application/json'
  //     }
  //   }
  // );
  // setAccessTokens(response.data);
  // if (success) {
  //   success();
  // }
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
