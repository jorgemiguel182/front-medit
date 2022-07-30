import React, {useState, useEffect} from 'react';
import {Box, Container} from '@material-ui/core';
import DataTableComponent from './components/DataTableComponent';
import ModalComponent from './components/ModalComponent';
import api from '../../services/api';
import moment from 'moment';
import { Helmet } from 'react-helmet';

const ProductList = () => {

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    name: '',
    startDate: '',
    endDate: '',
  });

  const handleSearch = (filterDefault) => {
    setLoading(true);
    api.post("/filter-prontuarios", filterDefault).then((response) => {
      let result = response.data;
      if (filter.name){
        result = result.filter(el => el.name.toLowerCase().includes(filter.name.toLowerCase()));
      }
      if (filter.startDate && filter.endDate){
        const startDate = moment(filter.startDate, 'dd/MM/yyyy')._i
        const endDate =  moment(filter.endDate, 'dd/MM/yyyy')._i + 'T23:59:59'
        result = result.filter(el => 
          moment(el.date_created, 'dd/MM/yyyy')._i > startDate && moment(el.date_created, 'dd/MM/yyyy')._i < endDate
        )
      }
      setData(result);
    }).catch(() => {})
    .finally(()=>{
      setLoading(false);
    });
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    console.log(`ENDPOINT DOWNLOAD PAYLOAD: ${filter.startDate} & ${filter.endDate}` )
  }

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
          <DataTableComponent handleOpen={handleOpen} data={data} handleSearch={handleSearch} setFilter={setFilter} filter={filter} loading={loading} handleDownload={handleDownload}/>
          <ModalComponent handleClose={handleClose} open={open} handleSearch={handleSearch} />
        </Container>
      </Box>
    </>
  );
} 

export default ProductList;
