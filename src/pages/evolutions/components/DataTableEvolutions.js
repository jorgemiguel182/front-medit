import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import {
  Box, 
  Card,
  Button,
} from '@material-ui/core';
import DataTable from 'react-data-table-component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

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

const DatatableEvolutions = ({data, id}) => {
  const history = useHistory();

  const handleGoToEvolution = (row) => {
    history.push(`/evolutions/${id}/edit/${row.evolution_id}`);
  }

  const handleGoToNew = () => {
    history.push(`/evolutions/${id}/new`);
  }

  return (
    <Card >
      <PerfectScrollbar>
        <Box >
          <DataTable
            columns={columns}
            data={data[0]?.evolutions}
            title="Evoluções"
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

export default DatatableEvolutions;
