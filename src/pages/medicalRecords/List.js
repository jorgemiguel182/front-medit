import React, {useState} from 'react';

import {
  Box,
  Container
} from '@material-ui/core';

import DataTableComponent from './components/DataTableComponent';
import ModalComponent from './components/ModalComponent';

import { Helmet } from 'react-helmet';

const ProductList = () => {

  const [open, setOpen] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Prontuários | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <DataTableComponent handleOpen={handleOpen} />
          <ModalComponent handleClose={handleClose} open={open} />
        </Container>
      </Box>
    </>
  );
} 

export default ProductList;
