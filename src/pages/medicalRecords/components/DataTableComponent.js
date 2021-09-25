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

import ModalComponent from './ModalComponent';

import api from '../../../services/api';

const columns = [
  {
    name: 'Nome',
    selector: row => row.name,
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


const DatatableComponent = ({handleOpen}) => {

  const history = useHistory();
  const [data, setData] = useState([]);

  const handleSearch = (filter) => {
    api.post("/filter-prontuarios", filter).then((response) => {
      setData(response.data);
    }).catch(() => {
      
    });
  }

  const goToEvolution = (row) => {
    history.push(`/evolutions/${row.id_research_client}`);
  }

  const handleGoToNew = () => {
    history.push('/medical-records/new');
  }

  useEffect(() => {
    handleSearch();
  }, [])

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <DataTable
            columns={columns}
            data={data}
            title="Lista de prontuários"
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
