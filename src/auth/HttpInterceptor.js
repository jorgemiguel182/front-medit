import { useSnackbar } from 'notistack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import config from '../config';
import { translateWithParams } from '../i18n';
import API from '../services/api';
import AuthService from './auth.service';

const HttpInterceptor = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [snack] = React.useState(useSnackbar());
  const [redirect] = React.useState(useHistory());
  const { t } = useTranslation();

  const notAnAuthenticationRequest = request => {
    return (
      request.url !== `${config.cognito.authUrl}/login` &&
      request.url !== `${config.cognito.authUrl}/refresh-token` &&
      request.url !== `${config.cognito.authUrl}/first-login` &&
      request.url !==
        `${config.cognito.authUrl}/backoffice-force-password-change`
    );
  };

  API.interceptors.request.use(
    async request => {
      if (notAnAuthenticationRequest(request)) {

        try {
          await AuthService.refreshToken(snack, redirect, () => {
            request.headers.Authorization = AuthService.getAccessToken();
          });
        } catch (e) {

          AuthService.logout(redirect);
          enqueueSnackbar(t('i18n.simplephrases.NOT_AUTHORIZED'), {
            variant: 'error'
          });
        }
      }
      return request;
    },
    error => {
      return Promise.reject(error);
    }
  );
  API.interceptors.response.use(
    async response => {
      // if(response.status !== 200)
      // return response;

      const { data } = response;
      if (!!data && !!data.message) {
        const message = translateWithParams(data);
        enqueueSnackbar(message, {
          variant: 'success',
          preventDuplicate: true
        });
      }

      return response;
    },
    error => {
      const { data } = error;
      if (!!data && !!data.message) {
        const message = translateWithParams(data);
        enqueueSnackbar(message, {
          variant: 'error'
        });
      }
      return Promise.reject(error);
    }
  );

  return children;
};

export default HttpInterceptor;
