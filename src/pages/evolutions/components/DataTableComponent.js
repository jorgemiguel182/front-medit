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
import ControlPointIcon from '@material-ui/icons/ControlPoint';

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

  const handleGoToEvolution = (row) => {
    history.push(`/evolutions/${row.cpf}/edit/${row.id}`);
  }

  const handleGoToNew = (cpf) => {
    history.push(`/evolutions/${cpf}/new`);
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
            title="Lista de evoluções"
            pagination
            pointerOnHover
            onRowClicked={(row) => handleGoToEvolution(row)}
            actions={
              <Button startIcon={<ControlPointIcon />} variant="contained" color="primary" onClick={e => handleGoToNew(1)}>
                Nova Evolução
              </Button>
            }
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default DatatableComponent;
