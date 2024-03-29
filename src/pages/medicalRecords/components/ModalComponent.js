import React, { useEffect, useState } from 'react';
import { Grid, Card, Paper, CardContent, CardHeader, Divider, Button, TextField, Typography, CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
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

const ModalCardContent = styled('div')`
  width: 1200px;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 400px;
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

const PacientCard = ({ data, handleSelected, loading }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
              <Grid item md={3} xs={12}>
                <Typography>
                  Paciente:
                </Typography>
              </Grid>
              <Grid item md={2} xs={12}>
                <Typography>
                  CPF:
                </Typography>
              </Grid>
              <Grid item md={1} xs={12}>
                <Typography>
                  Gênero:
                </Typography>
              </Grid>
              <Grid item md={1} xs={12}>
                <Typography>
                  Etnia:
                </Typography>
              </Grid>
              <Grid item md={2} xs={12}>
                <Typography>
                  Data pesquisa:
                </Typography>
              </Grid>
          </Grid>
          <Grid container spacing={2}>
              <Grid item md={3} xs={12}>
                <Typography>
                  <b>{data.name}</b>
                </Typography>
              </Grid>
              <Grid item md={2} xs={12}>
                <Typography>
                  <b>{data.cpf}</b>
                </Typography>
              </Grid>
              <Grid item md={1} xs={12}>
                <Typography>
                  <b>{data.gender}</b>
                </Typography>
              </Grid>
              <Grid item md={1} xs={12}>
                <Typography>
                  <b>{data.ethnicity}</b>
                </Typography>
              </Grid>
              <Grid item md={2} xs={12}>
                <Typography>
                  <b> {moment(data.date_created).format('DD/MM/YYYY')}</b>
                </Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                {loading ? (
                  <Button variant="contained" style={{width: '168px'}}>
                    <CircularProgress size={23} style={{color: 'white'}} />
                  </Button>
                ):(
                  <Button variant="contained" onClick={() => handleSelected(data)}>
                    Criar prontuário
                  </Button>
                )}
              </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br />
    </>
  )
}

export default function TransitionsModal({ handleClose, open, handleSearch }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');
  const [pacientData, setPacientData] = useState({});
  const [pacientList, setPacientList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [selected, setSelected] = useState('');

  const handleSearchByName = async () => {
    setLoadingSearch(true)
    const data = {
      name,
      type: "new_pront"
    }
    try {
      const response = await api.post('/filter-researchs', data);
      if (response.data.status === 'OK') {
        enqueueSnackbar('Não foi possível encontrar o paciente', { variant: 'error' });
      } else {
        setPacientList(response.data);
      }
    } catch {
      console.log('error');
    } finally {
      setLoadingSearch(false);
    }
  }

  const handleSubmit = async () => {
    
    const data = {
      id_research_client: pacientData.id,
      name: pacientData.name,
      cpf: pacientData.cpf,
      phone: pacientData.tel,
      born_date: pacientData.born_date
    }
    
    setLoading(true);
    try {
      const response = await api.post('/new-prontuario', data);
      enqueueSnackbar(response.data.msg, { variant: 'success' });
      setPacientList([]);
    } catch {
      enqueueSnackbar('Este paciente já tem um prontuário vinculado', { variant: 'error' });
    } finally {
      setLoading(false);
      handleClose();
      handleSearch();
    }
  }

  const handleSelected = (data) => {
    setPacientData({});
    setPacientData(data);
  }

  useEffect(() => {
    setName('');
    setLoading(false);
    setPacientData({});
    setPacientList([]);
  }, [open])

  useEffect(()=>{
    if(pacientData?.id && pacientData?.name){
      handleSubmit();
    }
  },[pacientData]);

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
            <Divider />
            <ModalCardContent>
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
                  {loadingSearch ? (
                    <Button
                      style={{width: '111px'}}
                      color="primary"
                      variant="outlined"
                    >
                      <CircularProgress size={23} style={{color: '#02255C'}} />
                    </Button>
                  ):(
                    <Button 
                    disabled={name.trim().length === 0}
                    variant="outlined" 
                    onClick={() => handleSearchByName()}>
                      <SearchIcon /> Buscar
                    </Button>
                  )}
                </Grid>
              </Grid>
              <br />
              {pacientList?.map((item) => (
                <PacientCard data={item} key={item.id} handleSelected={handleSelected} loading={loading}/>
              ))}
            </CardContent>
            </ModalCardContent>
            <Divider />
            <CardContent>
              <ModalButtons>
                <Button variant="outlined" onClick={() => handleClose()}>Voltar</Button>
              </ModalButtons>
            </CardContent>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
