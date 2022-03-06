import React, {useState, useEffect} from 'react';
import {Box, Container} from '@material-ui/core';
import DataTableComponent from './components/DataTableComponent';
import ModalComponent from './components/ModalComponent';
import api from '../../services/api';

import { Helmet } from 'react-helmet';

const ProductList = () => {

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    name: ''
  });

  const handleSearch = (filterDefault) => {
    api.post("/filter-prontuarios", filterDefault).then((response) => {
      let result = response.data;
      if (filter.name){
        result = result.filter(el => el.name.toLowerCase().includes(filter.name.toLowerCase()));
      }
      setData(result);
    }).catch(() => {
      
    });
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleSearch();
  }, [filter])

  return (
    <>
      <Helmet>
        <title>Prontuários | Listagem</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <DataTableComponent handleOpen={handleOpen} data={data} handleSearch={handleSearch} setFilter={setFilter}/>
          <ModalComponent handleClose={handleClose} open={open} handleSearch={handleSearch} />
        </Container>
      </Box>
    </>
  );
} 

export default ProductList;
