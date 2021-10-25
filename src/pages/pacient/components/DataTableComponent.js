import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
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

  const history = useHistory();
  const [data, setData] = useState([]);

  const handleSearch = (filter) => {
    api.post("/filter-researchs", filter).then((response) => {
      setData(response.data);
    }).catch(() => {
      
    });
  }

  const handleGoToTask = (row) => {
    history.push(`/pacient/${row.cpf}`);
  }

  useEffect(() => {
    handleSearch();
  }, [])

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <DataTable
            columns={columns}
            data={data}
            title="Lista de pesquisas respondidas pelos pacientes"
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
