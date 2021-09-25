import {
  Box, Button, Card, CardContent, CardHeader, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField
} from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import PacientHook from './indexHook';

import ModalComponent from './components/ModalComponent';

const buttons = [
  {id: 1, date: '0001-01-01'},
  {id: 2, date: '0001-01-02'},
  {id: 3, date: '0001-01-03'},
  {id: 4, date: '0001-01-04'},
  {id: 5, date: '0001-01-05'},
  {id: 1, date: '0001-01-01'},
  {id: 2, date: '0001-01-02'},
  {id: 3, date: '0001-01-03'},
  {id: 4, date: '0001-01-04'},
  {id: 5, date: '0001-01-05'},
  {id: 1, date: '0001-01-01'},
  {id: 2, date: '0001-01-02'},
  {id: 3, date: '0001-01-03'},
  {id: 4, date: '0001-01-04'},
  {id: 5, date: '0001-01-05'}
];

const Evolution = () => {

  const {
    values,
    open,
    data,
    handleChange,
    handleSubmit,
    handleChangeMultiple,
    handleClose,
    handleOpen
  } = PacientHook();

  return (
    <>
      <Helmet>
        <title>Evolução | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xs={12}>
              <Card>
                <form autoComplete="off" onSubmit={(e) => handleSubmit(e)} >
                  <CardHeader title="Evolução" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Nome"
                          name="name"
                          onChange={handleChange}
                          value={values.name}
                          disabled
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Data de atendimento"
                          name="date"
                          onChange={handleChange}
                          type="date"
                          value={values.date}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Telefone"
                          name="tel"
                          onChange={handleChange}
                          value={values.tel}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={9} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Registro"
                          name="register"
                          onChange={handleChange}
                          value={values.register}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Data do registro"
                          name="register_date"
                          onChange={handleChange}
                          type="date"
                          value={values.register_date}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Email"
                          name="email"
                          onChange={handleChange}
                          value={values.email}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Celular"
                          name="celular"
                          onChange={handleChange}
                          value={values.celular}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={3} >
                        <FormControl component="fieldset">
                          <FormLabel component="legend">Teste de COVID-19</FormLabel>
                          <RadioGroup aria-label="test_covid" name="test_covid" value={values.test_covid} onChange={handleChange}>
                            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Sim" />
                            <FormControlLabel value="no" control={<Radio color="primary" />} label="Não" />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          multiline
                          rows={5}
                          label="Resultado"
                          name="result_test_covid"
                          onChange={handleChange}
                          value={values.result_test_covid}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={3} >
                        <FormControl component="fieldset">
                          <FormLabel component="legend">Alergias</FormLabel>
                          <RadioGroup aria-label="allergies" name="allergies" value={values.allergies} onChange={handleChange}>
                            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Sim" />
                            <FormControlLabel value="no" control={<Radio color="primary" />} label="Não" />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          multiline
                          rows={5}
                          label="Medicação"
                          name="medication"
                          onChange={handleChange}
                          value={values.medication}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Problemas de saúde"
                          name="health_issues"
                          onChange={handleChange}
                          value={values.health_issues}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected value="none">Não</option>
                          <option value="1">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Sintomas"
                          name="symptoms"
                          onChange={handleChange}
                          value={values.symptoms}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected value="none">Não</option>
                          <option value="1">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Data de início dos sintomas"
                          name="symptoms_date"
                          type="date"
                          onChange={handleChange}
                          value={values.symptoms_date}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                    >
                      Salvar evolução
                    </Button>
                  </Box>
                </form>
                <Divider />
                <CardHeader title="Lançamentos diários" />
                <CardContent>
                  <Button variant="contained" color="primary" onClick={() => handleOpen()}>Novo lançamento de sintomas</Button>
                </CardContent>
                <CardContent>
                  {buttons.map((button) => (
                    <Button style={{marginRight: '30px', marginBottom: '30px'}} onClick={() => handleOpen()} variant="outlined" key={button.id} color="primary">{button.date}</Button>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ModalComponent handleClose={handleClose} open={open} />
    </>
  )
};

export default Evolution;
