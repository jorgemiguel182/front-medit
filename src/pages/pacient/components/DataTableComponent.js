import React, {useEffect, useState} from 'react';
import moment from 'moment';

import {
  Box, Card,
  Button,
  TextField
} from '@material-ui/core';
import DataTable from 'react-data-table-component';
import PerfectScrollbar from 'react-perfect-scrollbar';

import api from '../../../services/api';

const columns = [
  {
    name: 'Nome',
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
    name: 'Data de criação',
    selector: row => moment(row.date_created).format('DD/MM/YYYY'),
    sortable: true,
		reorder: true,
  },
];


const DatatableComponent = ({...rest}) => {

  const [data, setData] = useState([]);

  const handleSearch = (filter) => {
    api.post("/filter-researchs", filter).then((response) => {
      setData(response.data);
    }).catch(() => {
      
    });
  }

  // const handleTeste = async () => {
  //   const response = await api.post(`${process.env.REACT_APP_COGNITO_AUTH_URL}/refresh-token`, { refresh_token: localStorage.getItem("refresh_token") })
  //   console.log(response)
  // }

  useEffect(() => {
    // handleTeste();
    handleSearch();
  }, [])

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <DataTable
            columns={columns}
            data={data}
            title="Lista de pacientes"
            pagination
            pointerOnHover
            // onRowClicked={(row) => handleGoToTask(row)}
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
