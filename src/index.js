import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import * as serviceWorker from './serviceWorker';
import { createRef } from 'react';
import App from './App';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const notistackRef = createRef();

const onClickDismiss = key => () => {
  notistackRef.current.closeSnackbar(key);
};

ReactDOM.render((
  <BrowserRouter>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      ref={notistackRef}
      action={key => (
        <Button onClick={onClickDismiss(key)}>
          <CloseIcon style={{color: 'white'}} />
        </Button>
      )}
    >
      <App />
    </SnackbarProvider>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();