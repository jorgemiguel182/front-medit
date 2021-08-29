<<<<<<< HEAD
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
import jwt_decode from 'jwt-decode';
import AuthService from '../auth/auth.service';

const getRolesFromToken = () => {
  const jwtObject = jwt_decode(AuthService.getAccessToken());

  return jwtObject.user_roles.split(' ');
};

const getUsername = () => {
  const jwtObject = jwt_decode(AuthService.getAccessToken());
  return jwtObject['cognito:username'];
};

const hasRole = mustHaveRole => {
  return getRolesFromToken().includes(mustHaveRole);
};

const getFirstAvailableRoute = () => {
  let role;

  const view = getRolesFromToken().filter(item => {
    return item === 'dashboard' || item === 'ticket_list' || item === 'chat';
  });

  const haveDashBoard = view.find(item => {
    return item === 'dashboard';
  });
  const haveTicketList = view.find(item => {
    return item === 'ticket_list';
  });
  const haveChat = view.find(item => {
    return item === 'chat';
  });

  if (haveDashBoard) {
    role = haveDashBoard;
  }

  if (!haveDashBoard) {
    role = haveTicketList;
  }

  if (!haveDashBoard && !haveTicketList) {
    role = haveChat;
  }

  if (!haveDashBoard && !haveTicketList && !haveChat) {
    role = getRolesFromToken()[0];
  }

  const rolesPath = {
    dashboard: '/dashboardPanel',
    ticket_list: '/tickets',
    user: '/users',
    group: '/groups',
    ticket_new: '/newGuideTicket',
    chat: '/chats',
    automations: '/automations',
    macros: '/macros'
  };
  return rolesPath[role] ?? '/dashboardPanel';
  // return rolesPath[view[0]] ?? `/${rolesPath[role]}`;
};

export default {
  getRolesFromToken,
  hasRole,
  getFirstAvailableRoute,
  getUsername
};
=======
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
import jwt_decode from 'jwt-decode';
import AuthService from '../auth/auth.service';

const getRolesFromToken = () => {
  const jwtObject = jwt_decode(AuthService.getAccessToken());

  return jwtObject.user_roles.split(' ');
};

const getUsername = () => {
  const jwtObject = jwt_decode(AuthService.getAccessToken());
  return jwtObject['cognito:username'];
};

const hasRole = mustHaveRole => {
  return getRolesFromToken().includes(mustHaveRole);
};

const getFirstAvailableRoute = () => {
  let role;

  const view = getRolesFromToken().filter(item => {
    return item === 'dashboard' || item === 'ticket_list' || item === 'chat';
  });

  const haveDashBoard = view.find(item => {
    return item === 'dashboard';
  });
  const haveTicketList = view.find(item => {
    return item === 'ticket_list';
  });
  const haveChat = view.find(item => {
    return item === 'chat';
  });

  if (haveDashBoard) {
    role = haveDashBoard;
  }

  if (!haveDashBoard) {
    role = haveTicketList;
  }

  if (!haveDashBoard && !haveTicketList) {
    role = haveChat;
  }

  if (!haveDashBoard && !haveTicketList && !haveChat) {
    role = getRolesFromToken()[0];
  }

  const rolesPath = {
    dashboard: '/dashboardPanel',
    ticket_list: '/tickets',
    user: '/users',
    group: '/groups',
    ticket_new: '/newGuideTicket',
    chat: '/chats',
    automations: '/automations',
    macros: '/macros'
  };
  return rolesPath[role] ?? '/dashboardPanel';
  // return rolesPath[view[0]] ?? `/${rolesPath[role]}`;
};

export default {
  getRolesFromToken,
  hasRole,
  getFirstAvailableRoute,
  getUsername
};
>>>>>>> 9884c39db954c1951e3286d14e4fe7e6c6b89e21
