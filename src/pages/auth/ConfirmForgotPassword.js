import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@material-ui/core';

const ConfirmForgotPassword = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleOnSubmit = (values) => {
    console.log(values)

    axios.post(`${process.env.REACT_APP_COGNITO_AUTH_URL}/confirm-forgot-password`, values)
      .then((response) => {
        console.log(response);
        enqueueSnackbar("Sucesso", { variant: 'success' });
        history.push('/');
      }).catch((err) => {
        if (err.response) {
          console.log(err.response)
          enqueueSnackbar(err.response.data.message, { variant: 'error' });
        }
      })
  }

  return (
    <>
      <Helmet>
        <title>Nova Senha</title>
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
              code: '',
              password: '',
              username: ''
            }}
            validationSchema={
              Yup.object().shape({
                code: Yup.string().max(255).required('verification code is required'),
                password: Yup.string().max(255).required('password is required'),
                username: Yup.string().max(255).required('username is required')
              })
            }
            onSubmit={(values) => handleOnSubmit(values)}
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
                <Box sx={{ mb: 3 }} m={2} pt={3}>
                  <Typography
                    color="textSecondary"
                    variant="h6"
                  >
                    Preencha o formulário para cadastro de nova senha
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  label="Verification Code"
                  margin="normal"
                  name="code"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.code}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.username}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Nova Senha"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Nova senha!
                  </Button>
                </Box>

              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default ConfirmForgotPassword;
