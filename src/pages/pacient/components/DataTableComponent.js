import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import {
  Box, Card,
  Button,
  TextField,
  Typography,
  Grid,
  CardContent
} from '@material-ui/core';
import DataTable from 'react-data-table-component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import SearchPacient from './SearchPacient';
import api from '../../../services/api';

const columns = [
  {
    name: 'Paciente',
    selector: row => row.name,
    sortable: true,
		reorder: true,
  },
  {
    name: 'Data de nascimento',
    selector: row => moment(row.born_date).format('DD/MM/YYYY'),
    sortable: true,
		reorder: true,
  },
  {
    name: 'Respondido em',
    selector: row => moment(row.date_created).format('DD/MM/YYYY'),
    sortable: true,
		reorder: true,
  },
  {
    name: 'Status',
    selector: row => "Pendente Pagamento",
    sortable: true,
		reorder: true,
  }
];


const DatatableComponent = ({...rest}) => {

  const history = useHistory();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    name: '',
    status: ''
  });
  

  const handleSearch = (filterDefault) => {
    api.post("/filter-researchs", filterDefault).then((response) => {
      let result = response.data;
      if (filter.name){
        result = result.filter(el => el.name.toLowerCase().includes(filter.name.toLowerCase()));
      }
      if (filter.status){
        result = result.filter(el => el?.status === filter.status)
      }
      setData(result);
    }).catch(() => {
      
    });
  }

  const handleGoToTask = (row) => {
    history.push(`/pacient/${row.cpf}`);
  }

  const Title = () => {
    return (
      <>
        <Typography variant='h5'>Lista de pesquisas respondidas pelos pacientes</Typography>
        <SearchPacient setFilter={setFilter}/>
      </>

    );
  };

  useEffect(() => {
    handleSearch();
  }, [filter])

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <DataTable
            columns={columns}
            data={data}
            title={Title()}
            pagination
            pointerOnHover
            onRowClicked={(row) => handleGoToTask(row)}
            // actions={
            //   <Button startIcon={<ControlPointIcon />} variant="contained" color="primary" onClick={e => handleGoToNew()}>
            //     Nova tarefa
            //   </Button>
            // }
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default DatatableComponent;
