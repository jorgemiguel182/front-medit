import 'react-perfect-scrollbar/dist/css/styles.css';
import HttpInterceptor from './auth/HttpInterceptor';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import Routes from './Routes_2';
// import routes from 'src/routes';

const App = () => {
//   const routing = useRoutes(routes);

//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyles />
//       {routing}
//     </ThemeProvider>
//   );
// };
return (
    <div>
      <HttpInterceptor>
        <GlobalStyles />
        {/* <GlobalAppStyle /> */}
        <Routes />
      </HttpInterceptor>
    </div>
  );
};

export default App;
