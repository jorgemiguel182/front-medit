import React, { useEffect, useState } from 'react';
import { Grid, Card, Paper, CardContent, CardHeader, Divider, Button, TextField, Typography, CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

import api from '../../../services/api';

const ModalButtons = styled('div')`
  display: flex;
  justify-content: space-between;
  aling-items: center;
`

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    // maxHeight: '300px',
    minWidth: '600px'
  },
}));

export default function TransitionsModal({ handleClose, open }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');
  const [pacientData, setPacientData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true)
    const data = {
      name
    }
    try {
      const response = await api.post('/filter-researchs', data);
      if(response.data.status === 'OK'){
        enqueueSnackbar('Não foi possível encontrar o paciente', { variant: 'error' });
        setLoading(false);
      }else{
        setPacientData(response.data[0]);
        setLoading(false);
      }
    } catch {
      console.log('error');
    }
  }

  const handleSubmit = async () => {
    setLoading(true);

    const data = {
      id_research_client: pacientData.id,
      name: pacientData.name
    }

    try {
      const response = await api.post('/new-prontuario', data);
      enqueueSnackbar(response.data.msg, { variant: 'success' });
      setLoading(false);
    } catch {
      enqueueSnackbar('Este paciente já tem um prontuário vinculado', { variant: 'error' });
      setLoading(false);
    }
  }

  useEffect(() => {
    setName('');
    setLoading(false);
    setPacientData({});
  }, [open])

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <CardHeader title="Criar novo prontuário" />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={9} xs={12}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Nome completo do paciente"
                    name="name"
                    onChange={(element) => setName(element.target.value)}
                    value={name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  <Button variant="outlined" onClick={() => handleSearch()}><SearchIcon /> Buscar</Button>
                </Grid>
              </Grid>
              <br />
              {!loading ?
                (
                  <Card>
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item md={9} xs={12}>
                          <Typography>
                            Nome do paciente: <b>{pacientData?.name}</b>
                          </Typography>
                        </Grid>
                        <Grid item md={3} xs={12}>
                          <Typography>
                            Data de criação: <b>{pacientData?.date_created}</b>
                          </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                          <Typography>
                            CPF: <b>{pacientData?.cpf}</b>
                          </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                          <Typography>
                            Gênero: <b>{pacientData?.gender}</b>
                          </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                          <Typography>
                            Etnia: <b>{pacientData?.ethnicity}</b>
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ) :
                (<CircularProgress />)
              }

            </CardContent>
            <Divider />
            <CardContent>
              <ModalButtons>
                <Button variant="outlined" onClick={() => handleClose()}>Cancelar</Button>
                <Button variant="contained" onClick={() => handleSubmit()} >Criar prontuário</Button>
              </ModalButtons>
            </CardContent>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
