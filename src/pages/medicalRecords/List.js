import React, {useState} from 'react';
import {Box, Container} from '@material-ui/core';
import DataTableComponent from './components/DataTableComponent';
import ModalComponent from './components/ModalComponent';
import api from '../../services/api';

import { Helmet } from 'react-helmet';

const ProductList = () => {

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleSearch = (filter) => {
    api.post("/filter-prontuarios", filter).then((response) => {
      setData(response.data);
    }).catch(() => {
      
    });
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Prontuários</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <DataTableComponent handleOpen={handleOpen} data={data} handleSearch={handleSearch} />
          <ModalComponent handleClose={handleClose} open={open} handleSearch={handleSearch} />
        </Container>
      </Box>
    </>
  );
} 

export default ProductList;
