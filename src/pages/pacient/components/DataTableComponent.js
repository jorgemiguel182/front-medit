import React, {useEffect, useState} from 'react';

import {
  Box, Card,
  Button
} from '@material-ui/core';
import DataTable from 'react-data-table-component';
import PerfectScrollbar from 'react-perfect-scrollbar';

import api from '../../../services/api';

import ControlPointIcon from '@material-ui/icons/ControlPoint'; 


const columns = [
  {
    name: 'Nome',
    selector: row => row.title,
  },
  {
    name: 'Data',
    selector: row => row.year,
  },
];


const DatatableComponent = ({...rest}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/filter-researchs").then((response) => {
      console.log(response);
    })
  }, [])

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <DataTable
            columns={columns}
            data={data}
            title="Lista de tarefas"
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
