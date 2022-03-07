import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {useSnackbar} from 'notistack';
import api from '../../services/api';
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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  CircularProgress
} from '@material-ui/core';
import formValidate from '../../utils/formValidate';

const Email = () => {

  const { enqueueSnackbar } = useSnackbar();
  const [type, setType] = useState('whatsapp');
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: '',
    phone: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {}
      if (type.includes('whatsapp'))   {
        data = {phone: values.phone}
      } else {
        data = {email: values.email}
      }

    setLoading(true);  
    try{
      const response = await api.post('/send-research', data);
      enqueueSnackbar('Pesquisa enviada com sucesso', {variant: 'success'});
      setValues({email:'', phone:''});
    }catch{
      enqueueSnackbar('Não foi possível enviar a pesquisa', {variant: 'error'});
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  function returnNumbers(value) {
    return value.replace(/\D/g, '');
  }

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
                    title="Enviar pesquisa para o paciente"
                  />
                  <Divider />
                  <CardContent>
                    <Grid
                      container
                      spacing={3}
                      direction="column"
                    >
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <FormControl component="fieldset">
                          <FormLabel component="legend">Meio para envio:</FormLabel>
                          <RadioGroup row value={type} onChange={event=>setType(event.target.value)}>
                            <FormControlLabel value="whatsapp" control={<Radio color="primary" />} label="WhatsApp" />
                            <FormControlLabel value="email" control={<Radio color="primary" />} label="E-mail" />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        {type.includes('whatsapp') && (
                          <InputMask  
                            mask="(99) 99999-9999" 
                            maskChar=" "
                            onChange={handleChange}
                            value={values.phone}
                            >
                            {() => <TextField 
                              style={{width: '160px'}}
                              label='Celular com DDD'
                              name="phone"
                              required
                              variant="outlined"
                            />}
                          </InputMask>
                        )}
                        {type.includes('email') && (
                          <TextField
                            style={{width: '400px'}}
                            label='E-mail preferencial'
                            name="email"
                            onChange={handleChange}
                            required
                            value={values.email}
                            variant="outlined"
                          />
                        )}
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
                    {loading ? (
                      <Button
                      color="primary"
                      variant="contained"
                      style={{width: '83px'}}
                    >
                      <CircularProgress size={24} style={{color: 'white'}} />
                    </Button>
                    ):(
                      <Button
                        disabled={
                          (type.includes('email') && ! formValidate.isEmail(values.email)) ||
                          (type.includes('whatsapp') && returnNumbers(values.phone).length !== 11)
                        }
                        color="primary"
                        variant="contained"
                        type="submit"
                      >
                        Enviar
                      </Button>
                    )}
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
