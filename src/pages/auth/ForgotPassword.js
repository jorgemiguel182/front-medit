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

const ForgotPassword = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const handleOnSubmit = (values) => {
    console.log(values)

    axios.post(`${process.env.REACT_APP_COGNITO_AUTH_URL}/forgot-password`, values)
      .then((response) => {
        console.log(response);
        enqueueSnackbar("Verifique seu e-mail e informe o código de verificação", { variant: 'success' });
      }).then(() => {
        history.push('/confirm-forgot-pass');
      }).catch((err) => {
        if (err.response) {
          enqueueSnackbar(err.response.data.response, { variant: 'error' });
        }
        console.log(err)
      })
  }

  return (
    <>
      <Helmet>
        <title>Esqueci minha senha</title>
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
              email: ''
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
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
                    Informe o e-mail para envio do código de recuperação de senha
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="E-mail"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />

                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Enviar código!
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

export default ForgotPassword;
