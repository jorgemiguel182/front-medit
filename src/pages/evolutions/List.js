import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {useSnackbar} from 'notistack'
import api from '../../services/api';
import HeaderPacient from './components/HeaderPacient';

import {
  Box,
  Container
} from '@material-ui/core';

import DataTableComponent from './components/DataTableComponent';

import { Helmet } from 'react-helmet';

const ProductList = () => {
  const { enqueueSnackbar } = useSnackbar();
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
        <title>Evoluções</title>
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
            <DataTableComponent data={data} id={id} />
        </Container>
      </Box>
    </>
  );
}

export default ProductList;
