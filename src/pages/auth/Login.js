import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  CircularProgress,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { useState } from 'react';

const Login = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = (values) => {
    setLoading(true);
    axios.post(`${process.env.REACT_APP_COGNITO_AUTH_URL}/login`, values)
      .then((response) => {
        localStorage.setItem('refresh_token', response.data.data.refresh_token);
        localStorage.setItem('access_token', response.data.data.id_token);
      }).then(() => {
        history.push('/emails');
      }).catch(function (error) {
        if (error.response) {
          enqueueSnackbar(error.response.data.message, { variant: 'error' });
        } 
      }).finally(()=>{
        setLoading(false);
      });
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(values) => {
              handleOnSubmit(values);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
                <form onSubmit={handleSubmit}>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      color="textPrimary"
                      variant="h2"
                      align="center"
                    >
                      MCare
                    </Typography>
                  </Box>
                  <TextField
                    error={Boolean(touched.username && errors.username)}
                    fullWidth
                    helperText={touched.username && errors.username}
                    label="Email Address"
                    margin="normal"
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.username}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <Box sx={{ py: 2 }}>
                    {loading ? (
                       <Button
                       fullWidth
                       color="primary"
                       variant="contained"
                     >
                       <CircularProgress size={30} style={{color: 'white'}} />
                     </Button>
                    ):
                    (
                      <Button
                        color="primary"
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        onClick={handleOnSubmit}
                      >
                        Login
                      </Button>
                    )}
                  </Box>
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    <Link
                      component={RouterLink}
                      to="/forgot-pass"
                      variant="h8"
                    >
                      Esqueceu a senha?
                    </Link>
                  </Typography>
                </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
