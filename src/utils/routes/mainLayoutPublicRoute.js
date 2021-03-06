import React from 'react';
import { Route } from 'react-router-dom';
import MainNavbar from '../../components/MainNavbar';
import { experimentalStyled } from '@material-ui/core';

const MainLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const MainLayoutWrapper = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
});

const MainLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const MainLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const MainLayoutPublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <MainLayoutRoot>
          <MainNavbar />
          <MainLayoutWrapper>
            <MainLayoutContainer>
              <MainLayoutContent>
              <Component {...props} />
              </MainLayoutContent>
            </MainLayoutContainer>
          </MainLayoutWrapper>
        </MainLayoutRoot>
      )}
    />
  );
};
export default MainLayoutPublicRoute;
