import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import {useSnackbar} from 'notistack'
import api from '../../services/api';
import HeaderPacient from './components/HeaderPacient';
import {
  Box,
  Container,
  Grid,
  Divider,
  Button
} from '@material-ui/core';
import DataTableEvolutions from './components/DataTableEvolutions';
import DataTableSymptoms from './components/DataTableSymptoms';
import { Helmet } from 'react-helmet';

const ProductList = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    try{
      const response = await api.post("/filter-prontuarios", {id: id});
      if(response.data.status === 'OK'){
        enqueueSnackbar('Evoluções não encontradas.', { variant: 'error' });
      }else{
        setData(response.data);
      }
    }catch{
      enqueueSnackbar('Evoluções não encontradas.', {variant: 'error'});
    }
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <Helmet>
        <title>Prontuários | Detalhe</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
            <HeaderPacient data={data}/>
            <Grid container spacing={3}>
              <Grid item lg={6}>
                <DataTableEvolutions data={data} id={id} />
              </Grid>
              <Grid item lg={6}>
                <DataTableSymptoms data={data} id={id} />
              </Grid>
            </Grid>
            <Box mt={3}>
              <Button
                color="primary"
                variant="outlined"
                onClick={()=>history.push('/prontuarios')}
              >
                Voltar
              </Button>
            </Box>
        </Container>
      </Box>
    </>
  );
}

export default ProductList;
