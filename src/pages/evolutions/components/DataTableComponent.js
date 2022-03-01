import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { useHistory, useParams } from 'react-router';
import {useSnackbar} from 'notistack'
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
    name: 'Médico',
    selector: row => row.username_prof_cognito,
    sortable: true,
		reorder: true,
  },
  {
    name: 'CRM',
    selector: row => row.crm_prof,
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

  const handleGoToEvolution = (row) => {
    history.push(`/evolutions/${id}/edit/${row.evolution_id}`);
  }

  const handleGoToNew = () => {
    history.push(`/evolutions/${id}/new`);
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <DataTable
            columns={columns}
            data={data[0]?.evolutions}
            title="Lista de evoluções"
            pagination
            pointerOnHover
            onRowClicked={(row) => handleGoToEvolution(row)}
            actions={
              <Button startIcon={<ControlPointIcon />} variant="contained" color="primary" onClick={e => handleGoToNew()}>
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
