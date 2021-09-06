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
    born_date: "1111-11-11",
    first_symptom_date_covid: "1111-11-11",
    vaccine_first_date: "1111-11-11",
    vaccine_second_date: "1111-11-11",
    start_date_symptoms: "1111-11-11",
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

                    {/* dados iniciais */}
                    <Grid container spacing={3}>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Nome"
                          name="name"
                          onChange={handleChange}
                          required
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
                          required
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
                          required
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
                          required
                          value={values.tel}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* dados pessoais */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Estado onde nasceu"
                          name="born_state"
                          onChange={handleChange}
                          required
                          value={values.born_state}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Cidade onde nasceu"
                          name="born_city"
                          onChange={handleChange}
                          required
                          value={values.born_city}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Gênero"
                          name="gender"
                          onChange={handleChange}
                          required
                          value={values.gender}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Etnia"
                          name="ethnicity"
                          onChange={handleChange}
                          required
                          value={values.ethnicity}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={1} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Altura"
                          name="height"
                          onChange={handleChange}
                          required
                          value={values.height}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={1} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Peso"
                          name="weight"
                          onChange={handleChange}
                          required
                          value={values.weight}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* dados médicos */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Tipo sanguíneo"
                          name="blood_type"
                          onChange={handleChange}
                          value={values.blood_type}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Nome do responsável (se for menor de idade)"
                          name="responsible_name"
                          onChange={handleChange}
                          value={values.responsible_name}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Nome da mãe"
                          name="mother_name"
                          onChange={handleChange}
                          required
                          value={values.mother_name}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />

                  <CardHeader
                    title="Endereço atual"
                  />
                  <Divider />

                  {/* endereço */}
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="CEP"
                          name="postal_code"
                          onChange={handleChange}
                          required
                          value={values.postal_code}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />
                    <Grid container spacing={3}>
                      <Grid item md={5} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Endereço"
                          name="atual_address_street"
                          onChange={handleChange}
                          required
                          value={values.atual_address_street}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={1} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Número"
                          name="atual_address_number"
                          onChange={handleChange}
                          required
                          value={values.atual_address_number}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Complemento"
                          name="atual_address_complement"
                          onChange={handleChange}
                          value={values.atual_address_complement}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Bairro"
                          name="atual_address_district"
                          onChange={handleChange}
                          required
                          value={values.atual_address_district}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />
                    <Grid container spacing={3}>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Estado"
                          name="atual_address_state"
                          onChange={handleChange}
                          required
                          value={values.atual_address_state}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Cidade"
                          name="atual_address_city"
                          onChange={handleChange}
                          required
                          value={values.atual_address_city}
                          variant="filled"
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
                    {/* tratamento */}
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Tratamento"
                          name="treatment"
                          onChange={handleChange}
                          required
                          value={values.treatment}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Data do primeiro sintoma"
                          name="first_symptom_date_covid"
                          type="date"
                          onChange={handleChange}
                          required
                          value={values.first_symptom_date_covid}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* alergia */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Alergia à medicamento?"
                          name="alergy_medication"
                          onChange={handleChange}
                          required
                          value={values.alergy_medication}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Qual medicamento?"
                          name="alergy_medication_other"
                          onChange={handleChange}
                          required
                          value={values.alergy_medication_other}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <p>Teve alguma dessas doenças?</p>
                        <Select
                          multiple
                          native
                          name="any_desease"
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
                    <br />
                    <br />

                    {/* <!-- deficiencia --> */}
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <p>Você possui alguma deficiência?</p>
                        <Select
                          multiple
                          native
                          name="deficiency"
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
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se marcou Outros, diga-nos qual."
                          name="deficiency_other"
                          onChange={handleChange}
                          required
                          value={values.deficiency_other}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você tem calvide [careca] ?"
                          name="bald"
                          onChange={handleChange}
                          value={values.bald}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Gravida --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você esta grávida, ou existe a possibilidade?"
                          name="pregnant"
                          onChange={handleChange}
                          required
                          value={values.pregnant}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você esta amamentando?"
                          name="breastfeeding"
                          onChange={handleChange}
                          value={values.breastfeeding}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se SIM, qual a idade do bebê?"
                          name="baby_age"
                          onChange={handleChange}
                          value={values.baby_age}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você tem ovários policisticos?"
                          name="polycystic_ovary"
                          onChange={handleChange}
                          required
                          value={values.polycystic_ovary}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Covid --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você ja teve a COVID-19?"
                          name="any_covid"
                          onChange={handleChange}
                          required
                          value={values.any_covid}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se vacinou contra a COVID-19?"
                          name="got_vaccinated_covid"
                          onChange={handleChange}
                          required
                          value={values.got_vaccinated_covid}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Qual a data da primeira dose tomada?"
                          name="vaccine_first_date"
                          onChange={handleChange}
                          required
                          type="date"
                          value={values.vaccine_first_date}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se tomou a segunda dose, qual a data?"
                          name="vaccine_second_date"
                          onChange={handleChange}
                          required
                          type="date"
                          value={values.vaccine_second_date}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Sintomas --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você esta com sintomas agora?"
                          name="symptom_covid_now"
                          onChange={handleChange}
                          required
                          value={values.symptom_covid_now}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Data de início dos sintomas?"
                          name="start_date_symptoms"
                          onChange={handleChange}
                          type="date"
                          required
                          value={values.start_date_symptoms}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Há quantos dias você esta com sintomas?"
                          name="many_days_symptons"
                          onChange={handleChange}
                          required
                          value={values.many_days_symptons}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Saturação --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se está com sintomas, teve contato com quantas pessoas?"
                          name="have_contact_with_others"
                          onChange={handleChange}
                          required
                          value={values.have_contact_with_others}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <p>Quais os seus sinais/sintomas agora?</p>
                        <Select
                          multiple
                          native
                          name="symptons_now"
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
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se vocês estiver com febre, qual a média da temperatura?"
                          name="average_temp_if_have_fever"
                          onChange={handleChange}
                          value={values.average_temp_if_have_fever}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Saturação --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você mediu sua saturação oxigênio?"
                          name="oxygen_saturation"
                          onChange={handleChange}
                          required
                          value={values.oxygen_saturation}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <p>Antes de iniciar este tratamento procurou algum serviço hospitalar de pronto socorro ou lagum outro médico para tratar a COVID-19 ?</p>
                        <TextField
                          size="small"
                          fullWidth
                          label="Antes de iniciar este tratamento procurou algum serviço hospitalar de pronto socorro ou lagum outro médico para tratar a COVID-19 ?"
                          name="pre_treatment"
                          onChange={handleChange}
                          required
                          value={values.pre_treatment}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, qual?"
                          name="pre_treatment_yes"
                          onChange={handleChange}
                          required
                          value={values.pre_treatment_yes}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Tratamento covid --> */}
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <p>Antes de iniciar este tratamento, você já ficou internado em alguma unidade hospitalar para tratar a COVID-19 ?</p>
                        <TextField
                          size="small"
                          fullWidth
                          name="pre_treatment_hospitalized"
                          onChange={handleChange}
                          required
                          value={values.pre_treatment_hospitalized}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, qual?"
                          name="pre_treatment_yes_hospitalized"
                          onChange={handleChange}
                          required
                          value={values.pre_treatment_yes_hospitalized}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, quanto tempo ficou internado?"
                          name="days_hospitalized"
                          onChange={handleChange}
                          required
                          value={values.days_hospitalized}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Tratamento covid --> */}
                    <Grid container spacing={3}>
                      <Grid item md={4} xs={12}>
                        <p>Antes de iniciar este tratamento, você já fez algum teste para saber se teve ou não a COVID-19?</p>
                        <Select
                          multiple
                          native
                          name="test_before_treatment"
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
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Qual resultado"
                          name="test_before_treatment_result"
                          onChange={handleChange}
                          required
                          value={values.test_before_treatment_result}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <p>Se não fez o teste, qual o motivo?</p>
                        <Select
                          multiple
                          native
                          name="why_not_tested"
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
                    <br />
                    <br />

                    {/* <!-- Tratamento covid --> */}
                    <Grid container spacing={3}>
                      <Grid item md={4} xs={12}>
                        <p>Antes de iniciar este tratamento, algum profissional de saúde passou alguma dessas medicações para tratamento da COVID-19?</p>
                        <Select
                          multiple
                          native
                          name="medicine_before_treatment"
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
                      <Grid item md={4} xs={12}>
                        <p>Antes deste tratamento, algum médico associou alguma destas medicações que hoje estão em estudo para Profilaxia / Prevenção e tratamento da COVID-19 ?</p>
                        <TextField
                          size="small"
                          fullWidth
                          name="study_for_prophylaxis"
                          onChange={handleChange}
                          required
                          value={values.study_for_prophylaxis}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Está tomando há quantos dias?"
                          name="many_days_medicines"
                          onChange={handleChange}
                          required
                          value={values.many_days_medicines}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Medicamento --> */}
                    <Grid container spacing={3}>
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Ou você ja tomou por conta própria?"
                          name="took_it_on_its_own"
                          onChange={handleChange}
                          value={values.took_it_on_its_own}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, está tomando ha quantos dias?"
                          name="took_it_on_its_own_days"
                          onChange={handleChange}
                          required
                          value={values.took_it_on_its_own_days}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <p>Se sim, quais medicamentos foram utilizados?</p>
                        <Select
                          multiple
                          native
                          name="took_it_on_its_own_medicines"
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
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Outra"
                          name="took_it_on_its_own_medicines_other"
                          onChange={handleChange}
                          value={values.took_it_on_its_own_medicines_other}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Doenças --> */}
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <p>Você tem alguma destas doenças?</p>
                        <Select
                          multiple
                          native
                          name="have_any_deseases"
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
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Outros"
                          name="have_any_deseases_others"
                          onChange={handleChange}
                          required
                          value={values.have_any_deseases_others}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Medicação diária --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você toma alguma medicação diariamente?"
                          name="daily_medication"
                          onChange={handleChange}
                          required
                          value={values.daily_medication}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, qual?"
                          name="daily_medication_yes"
                          onChange={handleChange}
                          required
                          value={values.daily_medication_yes}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <p>Fumante?</p>
                        <Select
                          multiple
                          name="smoker"
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
                      <Grid item md={6} xs={12}>
                        <p>Bebida alcoólica</p>
                        <Select
                          multiple
                          native
                          name="alcohool"
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
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Já usou drogas ilícitas?"
                          name="drugs"
                          onChange={handleChange}
                          value={values.drugs}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, qual?"
                          name="drugs_yes"
                          onChange={handleChange}
                          required
                          value={values.drugs_yes}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Indicação --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Pessoa que indicou o tratamento"
                          name="indication_person"
                          onChange={handleChange}
                          value={values.indication_person}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Exames --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Carregar exames"
                          name="exame_uploads"
                          onChange={handleChange}
                          value={values.exame_uploads}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Aceite --> */}
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <p>
                          Declaro que li e fui esclarecido (a) sobre o "Termo de Consentimento Livre e Esclarecido" e concordo por livre e espontânea vontade o uso da medicação em estudo e demais necessárias em meu tratamento na COVID 19, mesmo sabendo que ainda não tem comprovação científica, estudo esse chamado de OFF LABEL.
                        </p>
                        <TextField
                          size="small"
                          fullWidth
                          name="term_accept_1"
                          onChange={handleChange}
                          required
                          value={values.term_accept_1}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Aceite --> */}
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <p>
                          Você autoriza que as informações deste formulário sejam cadastradas no Portal MÉDITT de Pesquisa para que o médico possa acessá-las?
                        </p>
                        <TextField
                          size="small"
                          fullWidth
                          name="term_accept_2"
                          onChange={handleChange}
                          required
                          value={values.term_accept_2}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

                    {/* <!-- Aceite --> */}
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <p>
                          Autorizo o compartilhamento dos meus dados, inseridos nesse formulário, para pesquisa, sabendo que eles são essenciais para que eu possa receber atendimento médico.
                        </p>
                        <TextField
                          size="small"
                          fullWidth
                          name="term_accept_3"
                          onChange={handleChange}
                          required
                          value={values.term_accept_3}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <br />

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
