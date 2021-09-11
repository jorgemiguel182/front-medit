import React from 'react';
import { Helmet } from 'react-helmet';
import PacientHook from './indexHook';

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
  Select,
  Link
} from '@material-ui/core';

const Pacient = () => {

  const {
    values,
    deficiency,
    any_desease,
    symptons_now,
    test_before_treatment,
    why_not_tested,
    medicine_before_treatment,
    took_it_on_its_own_medicines,
    have_any_deseases,
    smoker,
    alcohool,
    set_deficiency,
    set_any_desease,
    set_symptons_now,
    set_test_before_treatment,
    set_why_not_tested,
    set_medicine_before_treatment,
    set_took_it_on_its_own_medicines,
    set_have_any_deseases,
    set_smoker,
    set_alcohool,
    handleChange,
    handleSubmit,
    handleChangeMultiple

  } = PacientHook();

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
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
          >
            <Grid item lg={12} md={12} xs={12}>
              <form autoComplete="off" onSubmit={(e) => handleSubmit(e)} >
                <Card>
                  <CardHeader
                    title="Dados do paciente"
                  />
                  <Divider />
                  <CardContent>

                    {/* dados iniciais */}
                    <Grid container spacing={3}>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Nome"
                          name="name"
                          onChange={handleChange}
                          value={values.name}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Data de nascimento"
                          name="born_date"
                          onChange={handleChange}
                          type="date"
                          value={values.born_date}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="CPF"
                          name="cpf"
                          onChange={handleChange}
                          value={values.cpf}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Telefone (com ddd)"
                          name="tel"
                          onChange={handleChange}
                          value={values.tel}
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
