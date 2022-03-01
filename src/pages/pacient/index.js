import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import PacientHook from './indexHook';
import moment from 'moment';

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
  Link,
} from '@material-ui/core';

const Pacient = () => {
  const history = useHistory();

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
        <title>Pesquisa | Material Kit</title>
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
                          disabled
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
                          disabled
                          value={values.born_date ? moment(values.born_date).format('DD/MM/YYYY') : ''}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="CPF"
                          name="cpf"
                          disabled
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
                          disabled
                          value={values.tel}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* dados pessoais */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Estado onde nasceu"
                          name="born_state"
                          disabled
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
                          disabled
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
                          disabled
                          value={values.gender}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value=" ">Selecione*</option>
                          <option value="F">Feminino</option>
                          <option value="M">Masculino</option>
                        </TextField>
                      </Grid>
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Etnia"
                          name="ethnicity"
                          disabled
                          value={values.ethnicity}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value=" ">Selecione*</option>
                          <option value="branco">Branco</option>
                          <option value="negro">Negro</option>
                          <option value="pardo">Pardo</option>
                          <option value="amarelo">Amarelo</option>
                          <option value="indigena">Indígena</option>
                        </TextField>
                      </Grid>
                      <Grid item md={1} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Altura"
                          name="height"
                          disabled
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
                          disabled
                          value={values.weight}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* dados médicos */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Tipo sanguíneo"
                          name="blood_type"
                          disabled
                          value={values.blood_type}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="ns">Não Sei</option>
                          <option value="a_pos">A+</option>
                          <option value="a_neg">A-</option>
                          <option value="b_pos">B+</option>
                          <option value="b_neg">B-</option>
                          <option value="ab_pos">AB+</option>
                          <option value="ab_neg">AB-</option>
                          <option value="o+">O+</option>
                          <option value="o-">O-</option>
                        </TextField>
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Nome do responsável (se for menor de idade)"
                          name="responsible_name"
                          disabled
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
                          disabled
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
                          disabled
                          value={values.postal_code}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />
                    <Grid container spacing={3}>
                      <Grid item md={5} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Endereço"
                          name="atual_address_street"
                          disabled
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
                          disabled
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
                          disabled
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
                          disabled
                          value={values.atual_address_district}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />
                    <Grid container spacing={3}>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Estado"
                          name="atual_address_state"
                          disabled
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
                          disabled
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
                          disabled
                          value={values.treatment}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value=" ">Selecione uma opção</option>
                          <option value="preventive_prophylactic">Quero tratamento Profilático / Preventivo</option>
                          <option value="symptom_treatment">Quero tratamento pelos sintomas</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Data do primeiro sintoma"
                          name="first_symptom_date_covid"
                          disabled
                          value={values.first_symptom_date_covid ? moment(values.first_symptom_date_covid).format('DD/MM/YYYY') : ''}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* alergia */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Alergia à medicamento?"
                          name="alergy_medication"
                          disabled
                          value={values.alergy_medication}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="no">Não</option>
                          <option value="yes">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Qual medicamento?"
                          name="alergy_medication_other"
                          disabled
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
                          disabled
                          value={any_desease}
                        >
                          <option selected="" value="none">Não tive nenhuma das doenças acima</option>
                          <option value="zika">Zika</option>
                          <option value="dengue">Dengue</option>
                          <option value="chikungunya">Chikungunya</option>
                          <option value="tuberculose">Tuberculose</option>
                          <option value="febre_amarela">Febre Amarela</option>
                        </Select>
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
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
                          disabled
                          value={deficiency}
                        >
                          <option value="none">Não tenho</option>
                          <option value="1">Física</option>
                          <option value="2">Auditiva</option>
                          <option value="3">Visual</option>
                          <option value="4">Mental</option>
                          <option value="5">Outros</option>
                        </Select>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se marcou Outros, diga-nos qual."
                          name="deficiency_other"
                          disabled
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
                          disabled
                          value={values.bald}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="none">Não sou Careca</option>
                          <option value="yes">Sou Careca</option>
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* <!-- Gravida --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você esta grávida, ou existe a possibilidade?"
                          name="pregnant"
                          disabled
                          value={values.pregnant}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="none">Não Estou Grávida</option>
                          <option value="1">Estou Grávida</option>
                          <option value="2">Não Sei Dizer</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você esta amamentando?"
                          name="breastfeeding"
                          disabled
                          value={values.breastfeeding}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="none">Não</option>
                          <option value="1">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se SIM, qual a idade do bebê?"
                          name="baby_age"
                          disabled
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
                          disabled
                          value={values.polycystic_ovary}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="no">Não</option>
                          <option value="yes">Sim</option>
                          <option value="dont_know">Não sei dizer</option>
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* <!-- Covid --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você ja teve a COVID-19?"
                          name="any_covid"
                          disabled
                          value={values.any_covid}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="no">Não</option>
                          <option value="1">1 vez</option>
                          <option value="2">2 vezes</option>
                          <option value="3">3 vezes</option>
                          <option value="4_more">4 +</option>
                          <option value="dont_know">Não sei dizer</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se vacinou contra a COVID-19?"
                          name="got_vaccinated_covid"
                          disabled
                          value={values.got_vaccinated_covid}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="no">Não tomei</option>
                          <option value="CORONAVAC">CORONAVAC</option>
                          <option value="ASTRA_ZENECA">ASTRA ZENECA</option>
                          <option value="JOHNSON">JOHNSON &amp; JOHNSON</option>
                          <option value="PFIZER">PFIZER</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Qual a data da primeira dose tomada?"
                          name="vaccine_first_date"
                          disabled
                          value={values.vaccine_first_date ? moment(values.vaccine_first_date).format('DD/MM/YYYY') : ''}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se tomou a segunda dose, qual a data?"
                          name="vaccine_second_date"
                          disabled
                          value={values.vaccine_second_date ? moment(values.vaccine_second_date).format('DD/MM/YYYY') : ''}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* <!-- Sintomas --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você esta com sintomas agora?"
                          name="symptom_covid_now"
                          disabled
                          value={values.symptom_covid_now}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="no">Não</option>
                          <option value="yes">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Data de início dos sintomas?"
                          name="start_date_symptoms"
                          disabled
                          value={values.start_date_symptoms ? moment(values.start_date_symptoms).format('DD/MM/YYYY') : ''}
                          variant="filled"
                        />
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Há quantos dias você esta com sintomas?"
                          name="many_days_symptons"
                          disabled
                          value={values.many_days_symptons}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* <!-- Saturação --> */}
                    <Grid container spacing={3}>
                      <Grid item md={4} xs={12}>
                            <TextField
                              size="small"
                              fullWidth
                              label="Se está com sintomas, teve contato com quantas pessoas?"
                              name="have_contact_with_others"
                              disabled
                              value={values.have_contact_with_others || ''}
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
                          disabled
                          value={symptons_now}
                        >
                          <option value="none">Nenhum sintoma</option>
                          <option value="purple_lip">Labios roxos</option>
                          <option value="purple_finger">Pontas dos dedos roxa</option>
                          <option value="chills">Calafrios</option>
                          <option value="nausea">Nauseas</option>
                          <option value="pallor">Palidez</option>
                          <option value="mental_confusion">Confusão mental</option>
                          <option value="nasal_congestion">Congestão nasal</option>
                          <option value="swollen_eyes">Olhos Inchados (EDEMA)</option>
                          <option value="coriza">Coriza</option>
                          <option value="difficulty_swallowing">Dificuldade de engolir</option>
                          <option value="loss_of_taste">Perda de paladar</option>
                          <option value="hot_body_37">Corpo quente (Temp menor 37.5)</option>
                          <option value="loss_of_smell">Perda de olfato (Cheiro)</option>
                          <option value="high_pressure">Pressão alta</option>
                          <option value="low_pressure">Pressão baixa</option>
                          <option value="difficulty_breathing">Dificuldade para respirar</option>
                          <option value="joint_pain">Dores articulares</option>
                          <option value="chest_pain">Dor no peito</option>
                          <option value="headache">Dor de cabeça</option>
                          <option value="shortness_of_breathe">Falta de ar</option>
                          <option value="backache">Dor nas costas</option>
                          <option value="short_breath">Respiração curta/rapida</option>
                          <option value="throat_pain">Dor de garganta</option>
                          <option value="fainting_sensation">Sensação de desmaio</option>
                          <option value="pain_in_eyes">Dor nos olhos</option>
                          <option value="sinusitis">Sinusite</option>
                          <option value="chest_paint">Dor no peito</option>
                          <option value="sweating">Sudorese</option>
                          <option value="muscle_aches">Dores Musculares</option>
                          <option value="dry_cough">Tosse Seca</option>
                          <option value="pain_in_the_lower_back">Dor na região lombar</option>
                          <option value="cough_with_phlegm">Tosse com catarro</option>
                          <option value="diarrhea">Diarréia</option>
                          <option value="cough_with_blood">Tosse com sangue</option>
                          <option value="fatigue">Fraqueza/fadiga (Falta energia)</option>
                          <option value="tremors">Tremores</option>
                          <option value="vomiting">Vômitos</option>
                        </Select>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se vocês estiver com febre, qual a média da temperatura?"
                          name="average_temp_if_have_fever"
                          disabled
                          value={values.average_temp_if_have_fever}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="not_measured">Não medi a temperatura</option>
                          <option value="hypothermia">Abaixo de 35.8C [HIPOTERMIA]</option>
                          <option value="normal_temp">Entre 37.6C a 37.5C [TEMPERATURA NORMAL]</option>
                          <option value="fever">Entre 37.6C a 39.5C [FEBRE]</option>
                          <option value="high_fever">Entre 39.6C a 41.0C [FEBRE ATLTA]</option>
                          <option value="hyperthermia">Acima 41.0C [HIPERTERMIA]</option>
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* <!-- Saturação --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você mediu sua saturação oxigênio?"
                          name="oxygen_saturation"
                          disabled
                          value={values.oxygen_saturation}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="not_measured">Não medi minha saturação</option>
                          <option value="98_100">98% a 100%</option>
                          <option value="95_97">95% a 97%</option>
                          <option value="91_94">91% a 94%</option>
                          <option value="less_than_90">Menor que 90%</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <p>Antes de iniciar este tratamento procurou algum serviço hospitalar de pronto socorro ou lagum outro médico para tratar a COVID-19 ?</p>
                        <TextField
                          size="small"
                          fullWidth
                          label="Antes de iniciar este tratamento procurou algum serviço hospitalar de pronto socorro ou lagum outro médico para tratar a COVID-19 ?"
                          name="pre_treatment"
                          disabled
                          value={values.pre_treatment}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="no">Não</option>
                          <option value="yes">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, qual?"
                          name="pre_treatment_yes"
                          disabled
                          value={values.pre_treatment_yes}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value=" ">Selecione uma opção</option>
                          <option value="public">Publico</option>
                          <option value="private">Privado</option>
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* <!-- Tratamento covid --> */}
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <p>Antes de iniciar este tratamento, você já ficou internado em alguma unidade hospitalar para tratar a COVID-19 ?</p>
                        <TextField
                          size="small"
                          fullWidth
                          name="pre_treatment_hospitalized"
                          disabled
                          value={values.pre_treatment_hospitalized}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="no">Não</option>
                          <option value="yes">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, qual?"
                          name="pre_treatment_yes_hospitalized"
                          disabled
                          value={values.pre_treatment_yes_hospitalized}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value=" ">Selecione uma opção</option>
                          <option value="nursery">Enfermaria</option>
                          <option value="uti">UTI</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, quanto tempo ficou internado?"
                          name="days_hospitalized"
                          disabled
                          value={values.days_hospitalized}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value=" ">Selecione uma opção</option>
                          <option value="0_4">0 a 4 dias</option>
                          <option value="5_10">5 a 10 dias</option>
                          <option value="11_15">11 a 15 dias</option>
                          <option value="15_more">+15 dias</option>
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
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
                          disabled
                          value={test_before_treatment}
                        >
                          <option value="none">Não fiz teste</option>
                          <option value="quick_swab_test">Teste rápido - cotonete (farmácia)</option>
                          <option value="quick_blood_test">Teste rápido - sangue (farmácia)</option>
                          <option value="rt_pcr_swab">RT PCR - cotonete</option>
                          <option value="serology">Sorologia IgM/IgG</option>
                          <option value="neutralizing_antibodies">Pesquisa anticorpos neutralizantes</option>
                        </Select>
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Qual resultado"
                          name="test_before_treatment_result"
                          disabled
                          value={values.test_before_treatment_result}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="negative">Não detectado / Negativo</option>
                          <option value="positive">Detectado / Positivo</option>
                        </TextField>
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
                          disabled
                          value={why_not_tested}
                        >
                          <option value="not_symptoms">Não achou necessário / Não teve sintomas</option>
                          <option value="soft_symptoms">Não achou necessário / Sintomas leves gripais</option>
                          <option value="not_medical_insurance">Não tem convênio</option>
                          <option value="financial">Financeiro</option>
                          <option value="no_doctor_asked">Nenhum médico solicitou</option>
                        </Select>
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
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
                          disabled
                          value={medicine_before_treatment}
                        >
                          <option value="did_not_pass">Não passou</option>
                          <option value="amoxacilina">Amoxacilina</option>
                          <option value="azitromicina">Azitromicina</option>
                          <option value="claritromicina">Claritromicina</option>
                          <option value="levofloxacina">Levofloxacina</option>
                          <option value="carelto">Xarelto</option>
                          <option value="dipirona">Dipirona</option>
                          <option value="predinisona">Predinisona</option>
                          <option value="dexametasona">Dexametasona</option>
                          <option value="zinnat">Zinnat</option>
                          <option value="oseltamivir">Oseltamivir [Tamiflu]</option>
                          <option value="aas">A A S</option>
                          <option value="paracetamol">Paracetamol</option>
                          <option value="doxiciclina">Doxiciclina</option>
                          <option value="none_of_previous">Nenhuma das anteriores</option>
                        </Select>
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <p>Antes deste tratamento, algum médico associou alguma destas medicações que hoje estão em estudo para Profilaxia / Prevenção e tratamento da COVID-19 ?</p>
                        <TextField
                          size="small"
                          fullWidth
                          name="study_for_prophylaxis"
                          disabled
                          value={values.study_for_prophylaxis}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="no">Não</option>
                          <option value="yes">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Está tomando há quantos dias?"
                          name="many_days_medicines"
                          disabled
                          value={values.many_days_medicines}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* <!-- Medicamento --> */}
                    <Grid container spacing={3}>
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Ou você ja tomou por conta própria?"
                          name="took_it_on_its_own"
                          disabled
                          value={values.took_it_on_its_own}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="no">Não</option>
                          <option value="yes">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, está tomando ha quantos dias?"
                          name="took_it_on_its_own_days"
                          disabled
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
                          disabled
                          value={took_it_on_its_own_medicines}
                        >
                          <option value="hydroxychloroquine">Hidroxicloroquina</option>
                          <option value="ivermectin">Ivermectina</option>
                          <option value="chloroquine">Cloroquina</option>
                          <option value="nitazoxanide">Nitazoxadina [Anitta]</option>
                          <option value="pyrantel_pamoate">Pomoato de pirantel</option>
                          <option value="vitamin_a">Vitamina A</option>
                          <option value="vitamin_b">Vitamina B1, B6, B12</option>
                          <option value="vitamin_c">Vitamina C</option>
                          <option value="zinc">Zinco</option>
                          <option value="azitromicina">Azitromicina</option>
                          <option value="others">Outra</option>
                        </Select>
                      </Grid>
                      <Grid item md={2} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Outra"
                          name="took_it_on_its_own_medicines_other"
                          disabled
                          value={values.took_it_on_its_own_medicines_other}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
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
                          disabled
                          value={have_any_deseases}
                        >
                          <option value="no">Não</option>
                          <option value="asthma">Asma</option>
                          <option value="bronchitis">Bronquite alérgica</option>
                          <option value="diabetes">Diabetes</option>
                          <option value="kidney">Doença renal</option>
                          <option value="auto_immune">Doença auto imune</option>
                          <option value="hypertension">Hipertensão [Pressão Alta]</option>
                          <option value="obesity">Obesidade / Esteatose</option>
                          <option value="avc">AVC (Derrame)</option>
                          <option value="heart_disease">Cardiopatia (Doença do Coração)</option>
                          <option value="heart">Doença do coração</option>
                          <option value="hepatitis">Doença hepática</option>
                          <option value="thyroid">Doença tireoide</option>
                          <option value="cancer">Câncer</option>
                          <option value="others">Outros</option>
                        </Select>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Outros"
                          name="have_any_deseases_others"
                          disabled
                          value={values.have_any_deseases_others}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* <!-- Medicação diária --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Você toma alguma medicação diariamente?"
                          name="daily_medication"
                          disabled
                          value={values.daily_medication}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="no">Não</option>
                          <option value="yes">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, qual?"
                          name="daily_medication_yes"
                          disabled
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
                          disabled
                          value={smoker}
                        >
                          <option value="never">Nunca fumou</option>
                          <option value="yes">Sim</option>
                          <option value="ex">Ex fumante</option>
                          <option value="proved">Provou</option>
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
                          disabled
                          value={alcohool}
                        >
                          <option value="sociel">Social</option>
                          <option value="never">Nunca fez uso</option>
                          <option value="ex">Ex alcólatra</option>
                        </Select>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Já usou drogas ilícitas?"
                          name="drugs"
                          disabled
                          value={values.drugs}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value="no">Não</option>
                          <option value="yes">Sim</option>
                        </TextField>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Se sim, qual?"
                          name="drugs_yes"
                          disabled
                          value={values.drugs_yes}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                    {/* <!-- Indicação --> */}
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="Pessoa que indicou o tratamento"
                          name="indication_person"
                          disabled
                          value={values.indication_person}
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    
                    {/* <!-- Exames --> */}
                    <CardHeader
                      title="Exames"
                    />
                    <Grid container spacing={3}>
                      <Grid item md={3} xs={12}>
                        {values.exame_uploads ? (
                          <>
                            {values.exame_uploads.map((item) => (
                              <Link
                                variant="body2"
                                href={item.public_url}
                                target="_blank"
                              >
                                Baixar exame Anexado
                              </Link>
                            ))}
                          </>
                        ) : (
                          <TextField
                            size="small"
                            fullWidth
                            label="Carregar exames"
                            name="exame_uploads"
                            disabled
                            value={values.exame_uploads}
                            variant="filled"
                          />
                        )}

                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
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
                          disabled
                          value={values.term_accept_1}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value=" ">Selecione uma opção</option>
                          <option value="yes">Estou de acordo</option>
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
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
                          disabled
                          value={values.term_accept_2}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value=" ">Selecione uma opção</option>
                          <option value="yes">Sim</option>
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
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
                          disabled
                          value={values.term_accept_3}
                          variant="filled"
                          select
                          SelectProps={{ native: true }}
                        >
                          <option selected="" value=" ">Selecione uma opção</option>
                          <option value="yes">Sim</option>
                        </TextField>
                      </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />

                  </CardContent>
                  <Divider />
                  <Box sx={{ display: 'flex', justifyContent: "space-between", p: 2 }}>
                    <Button
                      color="primary"
                      variant="outlined"
                      onClick={()=>history.push('/pacients')}
                    >
                      Voltar
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                    >
                      Criar Prontuário
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
