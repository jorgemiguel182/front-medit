import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {useSnackbar} from 'notistack';
import api from '../../services/api';

import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  TextField
} from '@material-ui/core';

const Email = () => {

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("AFFFSSS")
    const data = {
      ...values
    }
    try{
      const response = await api.post('/send-research', data);
      enqueueSnackbar('Email enviado com sucesso', {variant: 'success'});
      setValues({email:""})
    }catch{
      enqueueSnackbar('Não foi possível enviar o email', {variant: 'error'})
    }
  }

  const [values, setValues] = useState({
    email: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return (
    <>
      <Helmet>
        <title>Enviar pesquisa</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={12}
              md={12}
              xs={12}
            >
              <form
                autoComplete="off"
                noValidate
                onSubmit={(e) => handleSubmit(e)}
              >
                <Card>
                  <CardHeader
                    // subheader="The information can be edited"
                    title="Enviar pesquisa no e-mail do paciente"
                  />
                  <Divider />
                  <CardContent>
                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          onChange={handleChange}
                          required
                          value={values.email}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 2
                    }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                    >
                      Enviar
                    </Button>
                  </Box>
                </Card>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default Email;
