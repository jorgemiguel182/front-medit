import {
  Box, Button, Card, CardContent, CardHeader, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import IndexHook from './indexHook';
import moment from 'moment';

import ModalComponent from './components/ModalComponent';

const Evolution = () => {

  const {
    values,
    open,
    data,
    symptomTable,
    block,
    handleChange,
    handleSubmit,
    handleChangeMultiple,
    handleClose,
    handleOpen
  } = IndexHook();

  const { id } = useParams();
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>Evolução</title>
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
                          disabled={block}
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
                          disabled={block}
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
                          disabled={block}
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
                          disabled={block}
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
                          disabled={block}
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
                          disabled={block}
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
                          disabled={block}
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
                          disabled={block}
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
                          disabled={block}
                          fullWidth
                          label="Problemas de saúde"
                          name="health_issues"
                          onChange={handleChange}
                          value={values.health_issues}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                          defaultValue="none"
                        >
                          <option selected value="none">Não</option>
                          <option value="1">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          disabled={block}
                          fullWidth
                          label="Sintomas"
                          name="symptoms"
                          onChange={handleChange}
                          value={values.symptoms}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                          defaultValue="none"
                        >
                          <option selected value="none">Não</option>
                          <option value="1">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          disabled={block}
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                    <Button
                      color="primary"
                      variant="outlined"
                      onClick={()=>history.push(`/evolutions/${id}`)}
                    >
                      Voltar
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      disabled={block}
                    >
                      Salvar evolução
                    </Button>
                  </Box>
                </form>
                {/* <Divider />
                <CardHeader title="Lançamentos diários" />
                <CardContent>
                  <Button variant="contained" color="primary" onClick={() => handleOpen()}>Novo lançamento de sintomas</Button>
                </CardContent>
                <CardContent>
                  {data[0]?.symptom_table?.map((item) => (
                    <Button style={{marginRight: '30px', marginBottom: '30px'}} 
                      onClick={() => handleOpen(item)} 
                      variant="outlined" 
                      key={item.id} 
                      color="primary"
                    >
                      {moment(item.date_created).format('DD/MM/YYYY')}
                    </Button>
                  ))}
                </CardContent> */}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ModalComponent handleClose={handleClose} open={open} symptomTable={symptomTable} />
    </>
  )
};

export default Evolution;
