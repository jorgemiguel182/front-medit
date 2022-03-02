import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import UserHook from './indexHook';

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
} from '@material-ui/core';
import formValidate from 'src/utils/formValidate';

const User = () => {
  const history = useHistory();

  const {
    values,
    handleChange,
    handleSubmit,
  } = UserHook();

  const allFiledsFilled = () => {
    return (formValidate.isEmail(values.email) &&  
            !formValidate.isEmpty(values.password) && 
            !formValidate.isEmpty(values.name) && 
            !formValidate.isEmpty(values.password));
  }

  return (
    <>
      <Helmet>
        <title>Médicos | Material Kit</title>
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
                    title="Dados do médico"
                  />
                  <Divider />
                  <CardContent>

                    {/* dados iniciais */}
                    <Grid container spacing={3}>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="E-mail (Login)"
                          name="email"
                          onChange={handleChange}
                          value={values.email}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Senha"
                          name="password"
                          type='password'
                          onChange={handleChange}
                          value={values.password}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br/>
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
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="CRM"
                          name="crm"
                          onChange={handleChange}
                          value={values.crm}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />

                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: "space-between", p: 2 }}>
                    <Button
                      color="primary"
                      variant="outlined"
                      onClick={()=>history.push('/users')}
                    >
                      Voltar
                    </Button>
                    <Button
                      disabled={!allFiledsFilled()}
                      color="primary"
                      variant="contained"
                      type="submit"
                    >
                      Salvar
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

export default User;
