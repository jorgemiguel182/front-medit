import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  TextField,
  Select
} from '@material-ui/core';

const Pacient = () => {

  const [values, setValues] = useState({
    email: 'demo@devias.io',
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
        <title>Email | Material Kit</title>
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
            <Grid item lg={12} md={12} xs={12}>
              <form autoComplete="off" noValidate >
                <Card>
                  <CardHeader
                    title="Dados do paciente"
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={4} xs={12}>
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
                      <Grid item md={3} xs={12}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          onChange={handleChange}
                          required
                          type="date"
                          value={values.email}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={2} xs={12}>
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
                      <Grid item md={3} xs={12}>
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
                    <br />
                    <br />
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
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
                      <Grid item md={3} xs={12}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          onChange={handleChange}
                          required
                          type="date"
                          value={values.email}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={2} xs={12}>
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
                      <Grid item md={2} xs={12}>
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
                      <Grid item md={1} xs={12}>
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
                      <Grid item md={1} xs={12}>
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
                    <br />
                    <br />
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
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
                      <Grid item md={4} xs={12}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          onChange={handleChange}
                          required
                          type="date"
                          value={values.email}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={4} xs={12}>
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
                  <CardHeader
                    title="Endereço atual"
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
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
                    <br />
                    <br />
                    <Grid container spacing={3}>
                      <Grid item md={5} xs={12}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          onChange={handleChange}
                          required
                          type="date"
                          value={values.email}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={1} xs={12}>
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
                      <Grid item md={3} xs={12}>
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
                      <Grid item md={3} xs={12}>
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
                    <br />
                    <br />
                    <Grid container spacing={3}>
                      <Grid item md={4} xs={12}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          onChange={handleChange}
                          required
                          type="date"
                          value={values.email}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={4} xs={12}>
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
                  <CardHeader
                    title="Dados do tratamento"
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
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
                      <Grid item md={3} xs={12}>
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
                    <br />
                    <br />
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          onChange={handleChange}
                          required
                          type="date"
                          value={values.email}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
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
                      <Grid item md={6} xs={12}>
                        <Select
                          multiple
                          native
                          inputProps={{
                            id: 'select-multiple-native',
                          }}
                          fullWidth
                        >
                          <option>
                            Selecione
                          </option>
                        </Select>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                    <Button
                      color="primary"
                      variant="contained"
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

export default Pacient;
