import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import {
  Box, Card, Button, Typography
} from '@material-ui/core';
import DataTable from 'react-data-table-component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SearchMedicalRecords from './SearchMedicalRecords';

const columns = [
  {
    name: 'Paciente',
    selector: row => row.name,
    sortable: true,
		reorder: true,
  },
  {
    name: 'Data prontuário',
    selector: row => moment(row.date_created).format('DD/MM/YYYY'),
    sortable: true,
		reorder: true,
  },
];


const DatatableComponent = ({handleOpen, handleSearch, data, setFilter, loading}) => {

  const history = useHistory();
  

  const goToEvolution = (row) => {
    history.push(`/evolutions/${row.id}`);
  }

  const handleGoToNew = () => {
    history.push('/prontuarios/new');
  }

  const Title = () => {
    return (
      <>
        <Typography variant='h5'>Lista de prontuários</Typography>
        <SearchMedicalRecords setFilter={setFilter} loading={loading} />
      </>

    );
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box >
          <DataTable
            columns={columns}
            data={data}
            title={Title()}
            pagination
            pointerOnHover
            onRowClicked={(row) => goToEvolution(row)}
            actions={
              <Button startIcon={<ControlPointIcon />} variant="contained" color="primary" onClick={e => handleOpen(true)}>
                Novo prontuário
              </Button>
            }
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default DatatableComponent;
