import React from 'react';
// import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router';
import AuthService from './auth.service';

const NotAuthorized = () => {
  // const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const location = useLocation();
  // enqueueSnackbar(t('i18n.simplephrases.NOT_AUTHORIZED'), {
  //   variant: 'warning',
  //   anchorOrigin: {
  //     vertical: 'top',
  //     horizontal: 'right'
  //   }
  // });
  AuthService.logout(useHistory(), location.pathname);
  return <></>;
};

export default NotAuthorized;
