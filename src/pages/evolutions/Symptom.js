import {
  Box, Button, Card, CardContent, CardHeader, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography
} from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import modalHook from './components/modalHook';
import { useSnackbar } from 'notistack';

const Symptom = () => {
  const { enqueueSnackbar } = useSnackbar();
  const {values, setValues, handleChange, handleSubmit} = modalHook();
  const { id } = useParams();
  const history = useHistory();
  const dateInput = useRef(null);
  const newSymptom = history.location.pathname.includes('new');
  
  const isDateFilled = () => {
    if (!values.date_created){
      enqueueSnackbar('Obrigatório informar a data', { variant: 'warning' });
      dateInput.current.focus();
      return false;
    }
    return true;
  }

  const checkSubmit = () => {
    if(isDateFilled()){
      handleSubmit();
    }
  }

  useEffect(()=>{
    if (newSymptom){
      dateInput.current.focus();
    }
  },[]);

  return (
    <>
      <Helmet>
        <title>Sintoma</title>
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
                  <CardHeader title="Sintoma" />
                  <Divider />
                  <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        inputRef={dateInput}
                        size="small"
                        fullWidth
                        label="Data/Sintoma"
                        name="date_created"
                        type="date"
                        required
                        onChange={handleChange}
                        // onBlur={()=>checkDateFilled()}
                        value={values?.date_created}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="AGEUSA - Perda de paladar"
                        name="ageusa"
                        onChange={handleChange}
                        value={values?.ageusa}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="ANOSMIA - Perda de olfato"
                        name="anosmia"
                        onChange={handleChange}
                        value={values?.anosmia}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="ASTRALGIA - Dores Articulares"
                        name="astralgia"
                        onChange={handleChange}
                        value={values?.astralgia}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="CÂIMBRAS"
                        name="caimbras"
                        onChange={handleChange}
                        value={values?.caimbras}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="CEFALÉIA - LEVE/MÉDIA - Dor Cabeça"
                        name="cefaleia_leve"
                        onChange={handleChange}
                        value={values?.cefaleia_leve}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="CEFALÉIA - FORTE - Dor Cabeça"
                        name="cefaleia_forte"
                        onChange={handleChange}
                        value={values?.cefaleia_forte}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="CONGESTÃO NASAL - Narina 'Fechada'"
                        name="congestao_nasal"
                        onChange={handleChange}
                        value={values?.congestao_nasal}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="CORIZA"
                        name="coriza"
                        onChange={handleChange}
                        value={values?.coriza}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="DIARRÉIA"
                        name="diarreia"
                        onChange={handleChange}
                        value={values?.diarreia}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="DOR ABDOMINAL"
                        name="dor_abdominal"
                        onChange={handleChange}
                        value={values?.dor_abdominal}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="DOR COSTAS"
                        name="dor_costas"
                        onChange={handleChange}
                        value={values?.dor_costas}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="DOR OLHOS"
                        name="dor_olhos"
                        onChange={handleChange}
                        value={values?.dor_olhos}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="DOR TÓRAX = DOR PEITO"
                        name="dor_torax_peito"
                        onChange={handleChange}
                        value={values?.dor_torax_peito}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="EDEMA OLHOS/FACE"
                        name="edema"
                        onChange={handleChange}
                        value={values?.edema}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="FALTA AR LEVE - DISPNÉIA"
                        name="falta_ar_leve"
                        onChange={handleChange}
                        value={values?.falta_ar_leve}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="FALTA AR MÉDIA/FORTE - DISPNÉIA"
                        name="falta_ar_media"
                        onChange={handleChange}
                        value={values?.falta_ar_media}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="FORMIGAMENTO"
                        name="formigamento"
                        onChange={handleChange}
                        value={values?.formigamento}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="FRAQUEZA ASTEMIA/ADINAMIA"
                        name="fraqueza_astemia"
                        onChange={handleChange}
                        value={values?.fraqueza_astemia}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="GARGANTA APERTO/INCHADA"
                        name="garganta"
                        onChange={handleChange}
                        value={values?.garganta}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="GARGANTA IRRITADA - Sem Dor"
                        name="garganta_irritada"
                        onChange={handleChange}
                        value={values?.garganta_irritada}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="INAPETÊNCIA"
                        name="inapetencia"
                        onChange={handleChange}
                        value={values?.inapetencia}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="MIALGIA - Dores Musculares"
                        name="mialgia"
                        onChange={handleChange}
                        value={values?.mialgia}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="NÁUSEAS"
                        name="nauseas"
                        onChange={handleChange}
                        value={values?.nauseas}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="ODINOFAGIA - Dor ao Comer"
                        name="odinofagia"
                        onChange={handleChange}
                        value={values?.odinofagia}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="OTALGIA - Dor de ouvido"
                        name="otalgia"
                        onChange={handleChange}
                        value={values?.otalgia}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="PRESSÃO OLHOS"
                        name="pressao_olhos"
                        onChange={handleChange}
                        value={values?.pressao_olhos}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="PRURIDO/COCEIRA"
                        name="prurido"
                        onChange={handleChange}
                        value={values?.prurido}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="SINUSITE - SENSAÇÃO"
                        name="sinusite"
                        onChange={handleChange}
                        value={values?.sinusite}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="SUDORESE"
                        name="sudorese"
                        onChange={handleChange}
                        value={values?.sudorese}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="TONTURA"
                        name="tontura"
                        onChange={handleChange}
                        value={values?.tontura}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="VÔMITOS"
                        name="vomitos"
                        onChange={handleChange}
                        value={values?.vomitos}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

                {/** SATURAÇÃO OXIGENIO */}
                <CardContent>
                  <Typography>{`SATURAÇÃO OXIGÊNIO > 93% >95%`}</Typography>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="M"
                        name="sat_oxigenio_m"
                        onChange={handleChange}
                        value={values?.sat_oxigenio_m}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="T"
                        name="sat_oxigenio_t"
                        onChange={handleChange}
                        value={values?.sat_oxigenio_t}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="N"
                        name="sat_oxigenio_n"
                        onChange={handleChange}
                        value={values?.sat_oxigenio_n}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

                {/** SATURAÇÃO OXIGENIO */}
                <CardContent>
                  <Typography>SATURAÇÃO OXIGÊNIO &lt; 93% MODERADO A GRAVE </Typography>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="M"
                        name="sat_oxigenio_moderado_m"
                        onChange={handleChange}
                        value={values?.sat_oxigenio_moderado_m}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="T"
                        name="sat_oxigenio_moderado_t"
                        onChange={handleChange}
                        value={values?.sat_oxigenio_moderado_t}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="N"
                        name="sat_oxigenio_moderado_n"
                        onChange={handleChange}
                        value={values?.sat_oxigenio_moderado_n}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

                {/** TEMPERATURA */}
                <CardContent>
                  <Typography>TEMPERATURA ABAIXO 35,8º C HIPOTERMIA</Typography>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="M"
                        name="temperatura_m"
                        onChange={handleChange}
                        value={values?.temperatura_m}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="T"
                        name="temperatura_t"
                        onChange={handleChange}
                        value={values?.temperatura_t}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="N"
                        name="temperatura_n"
                        onChange={handleChange}
                        value={values?.temperatura_n}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

                {/** TEMPERATURA */}
                <CardContent>
                  <Typography>TEMPERATURA ENTRE 35,9º A 37,5º C=NORMAL</Typography>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="M"
                        name="temperatura_normal_m"
                        onChange={handleChange}
                        value={values?.temperatura_normal_m}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="T"
                        name="temperatura_normal_t"
                        onChange={handleChange}
                        value={values?.temperatura_normal_t}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="N"
                        name="temperatura_normal_n"
                        onChange={handleChange}
                        value={values?.temperatura_normal_n}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

                {/** TEMPERATURA */}
                <CardContent>
                  <Typography>TEMPERATURA ENTRE 37,6º A 39,5º C=FEBRE</Typography>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="M"
                        name="temperatura_febre_m"
                        onChange={handleChange}
                        value={values?.temperatura_febre_m}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="T"
                        name="temperatura_febre_t"
                        onChange={handleChange}
                        value={values?.temperatura_febre_t}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="N"
                        name="temperatura_febre_n"
                        onChange={handleChange}
                        value={values?.temperatura_febre_n}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

                {/** TEMPERATURA */}
                <CardContent>
                  <Typography>TEMPERATURA ENTRE 39,6º a 41º C=FEBRE ALTA</Typography>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="M"
                        name="temperatura_febre_alta_m"
                        onChange={handleChange}
                        value={values?.temperatura_febre_alta_m}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="T"
                        name="temperatura_febre_alta_t"
                        onChange={handleChange}
                        value={values?.temperatura_febre_alta_t}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="N"
                        name="temperatura_febre_alta_n"
                        onChange={handleChange}
                        value={values?.temperatura_febre_alta_n}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

                {/** TEMPERATURA */}
                <CardContent>
                  <Typography>TEMPERATURA ACIMA DE 41º HIPERTERMIA</Typography>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="M"
                        name="temperatura_hipertermia_m"
                        onChange={handleChange}
                        value={values?.temperatura_hipertermia_m}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="T"
                        name="temperatura_hipertermia_t"
                        onChange={handleChange}
                        value={values?.temperatura_hipertermia_t}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="N"
                        name="temperatura_hipertermia_n"
                        onChange={handleChange}
                        value={values?.temperatura_hipertermia_n}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

                {/** TEMPERATURA */}
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="TEMPERATURA NO FRIO/CALAFRIO OU SUDORESE"
                        name="temperatura_frio_calor_sudorese"
                        onChange={handleChange}
                        value={values?.temperatura_frio_calor_sudorese}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

                {/** TEMPERATURA */}
                <CardContent>
                  <Typography>FISIOLOGIA RESPIRATÓRIA - Marcar com um X se fez</Typography>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="M"
                        name="fisiologia_respiratoria_m"
                        onChange={handleChange}
                        value={values?.fisiologia_respiratoria_m}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="T"
                        name="fisiologia_respiratoria_t"
                        onChange={handleChange}
                        value={values?.fisiologia_respiratoria_t}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

                {/** TEMPERATURA */}
                <CardContent>
                  <Typography>PRONAR</Typography>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="M"
                        name="pronar_m"
                        onChange={handleChange}
                        value={values?.pronar_m}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="T"
                        name="pronar_t"
                        onChange={handleChange}
                        value={values?.pronar_t}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={2} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="N"
                        name="pronar_n"
                        onChange={handleChange}
                        value={values?.pronar_n}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                
                {/** MEDICAMENTOS */}
                <CardContent>
                  <Typography>MEDICAMENTOS</Typography>
                  <br />
                  <Grid container spacing={3}>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="IVERMECTINA"
                        name="ivermectina"
                        onChange={handleChange}
                        value={values?.ivermectina}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="AZITROMICINA"
                        name="azitromicina"
                        onChange={handleChange}
                        value={values?.azitromicina}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="VITAMINA D"
                        name="vitamina_d"
                        onChange={handleChange}
                        value={values?.vitamina_d}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="VITAMINA C"
                        name="vitamina_c"
                        onChange={handleChange}
                        value={values?.vitamina_c}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="ZINCO"
                        name="zinco"
                        onChange={handleChange}
                        value={values?.zinco}
                        variant="filled"
                      />
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="CÚRCUMA"
                        name="curcuma"
                        onChange={handleChange}
                        value={values?.curcuma}
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

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
                      onClick={() => checkSubmit()}
                    >
                      Salvar sintoma
                    </Button>
                  </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default Symptom;
