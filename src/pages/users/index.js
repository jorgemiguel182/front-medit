import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import UserHook from './indexHook';
import InputMask from 'react-input-mask';

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
  CircularProgress
} from '@material-ui/core';
import PasswordValidationSection from './components/PasswordValidationSection'

const User = () => {
  const history = useHistory();
  const newUser = history.location.pathname.includes('new');
  const [showPwdHint, setShowPwdHint] = useState(false);
  const {
    values,
    handleChange,
    handleSubmit,
    alertPwdDif,
    allFiledsFilled,
    setConfirmPwd,
    confirmPwd,
    pwdValid,
    setPwdValid,
    loading
  } = UserHook();

  return (
    <>
      <Helmet>
        <title>Médicos | Detalhe</title>
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
            justifyContent="center"
          >
            <Grid item lg={5} md={8} xs={12}>
              <form autoComplete="off" onSubmit={(e) => handleSubmit(e)} >
                <Card>
                  <CardHeader
                    title="Dados do médico"
                  />
                  <Divider />
                  <CardContent>
                      <Grid item md={12} xs={12}>
                        <TextField
                          size="small"
                          fullWidth
                          label="E-mail (Login)"
                          name="email"
                          disabled={!newUser}
                          onChange={handleChange}
                          value={values.email}
                          variant="filled"
                        />
                      </Grid>
                    <br/>
                    {newUser && (
                      <>
                        <Grid container spacing={3}>
                          <Grid item md={6} xs={12}>
                            <TextField
                              error={!pwdValid && values.password.length > 0}
                              size="small"
                              fullWidth
                              label="Senha"
                              name="password"
                              type='password'
                              onChange={handleChange}
                              onFocus={()=>setShowPwdHint(true)}
                              onBlur={()=>setShowPwdHint(false)}
                              value={values.password}
                              variant="filled"
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <TextField
                              size="small"
                              fullWidth
                              label="Confirmar senha"
                              type='password'
                              name="confirmPwd"
                              onChange={(e)=>setConfirmPwd(e.target.value)}
                              onBlur={(e)=>alertPwdDif(e.target.value)}
                              value={confirmPwd}
                              variant="filled"
                            />
                          </Grid>
                        </Grid>
                        <br/>
                      </>
                    )}
                    <Grid container spacing={3}>
                      <Grid item md={12} xs={12}>
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
                    </Grid>
                    <br />
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
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
                      <Grid item md={6} xs={12}>
                        <InputMask  
                          mask="(99) 99999-9999" 
                          maskChar=" "
                          onChange={handleChange}
                          value={values.phone}
                          fullWidth
                          >
                          {() => <TextField 
                            style={{width: '160px'}}
                            label='Celular com DDD'
                            name="phone"
                            variant="filled"
                            size='small'
                          />}
                        </InputMask>
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
                    {loading ? (
                      <Button
                        color="primary"
                        variant="contained"
                        style={{width: '86px'}}
                      >
                        <CircularProgress size={24} style={{color: 'white'}} />
                      </Button>
                    ):(
                      <Button
                        disabled={!allFiledsFilled()}
                        color="primary"
                        variant="contained"
                        type="submit"
                      >
                        Salvar
                      </Button>
                    )}
                  </Box>
                </Card>
              </form>
            </Grid>
            {newUser && showPwdHint && (
            <Grid item lg={2} md={2} xs={12}>
              <Box mt={11}>
              <PasswordValidationSection password={values.password} setPwdValid={setPwdValid}/>

              </Box>
            </Grid>

            )}
          </Grid>
        </Container>
      </Box>
    </>
  )
};

export default User;
