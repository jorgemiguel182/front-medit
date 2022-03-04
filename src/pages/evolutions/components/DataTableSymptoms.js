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
    selector: row => moment(row.date_created.substr(0, 10)).format('DD/MM/YYYY'),
    sortable: true,
		reorder: true,
  },
];

const DatatableSymptoms = ({data, id}) => {
  const history = useHistory();

  const handleGoToSymptom = (row) => {
    history.push(`/symptoms/${id}/edit/${row.symptom_table_id}`);
  }

  const handleGoToNew = () => {
    history.push(`/symptoms/${id}/new`);
  }

  return (
    <Card >
      <PerfectScrollbar>
        <Box >
          <DataTable
            columns={columns}
            data={data[0]?.symptom_table}
            title="Sintomas"
            pagination
            pointerOnHover
            onRowClicked={(row) => handleGoToSymptom(row)}
            actions={
              <Button startIcon={<ControlPointIcon />} variant="contained" color="primary" onClick={e => handleGoToNew()}>
                Novo Sintoma
              </Button>
            }
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default DatatableSymptoms;
