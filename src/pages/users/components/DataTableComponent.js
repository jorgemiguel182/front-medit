import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import {
  Box, Card,
  Button,
  Typography,
} from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DataTable from 'react-data-table-component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import SearchUser from './SearchUser';
import api from '../../../services/api';

const columns = [
  {
    name: 'Médico',
    selector: row => row.name,
    sortable: true,
		reorder: true,
  },
  {
    name: 'CRM',
    selector: row => row.crm,
    sortable: true,
		reorder: true,
  },
  {
    name: 'E-mail (Login)',
    selector: row => row.email,
    sortable: true,
		reorder: true,
  },
  {
    name: 'Validação e-mail',
    selector: row => { 
      if (row.status === 'CONFIRMED') {
        return 'Concluída'
      } 
      return 'Pendente'
    },
    sortable: true,
		reorder: true,
  }
];


const DatatableComponent = ({...rest}) => {

  const history = useHistory();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    name: '',
    crm: ''
  });
  

  const handleSearch = (filterDefault = {}) => {
    api.post("/list-users", filterDefault).then((response) => {
      let result = response.data;
      if (filter.name){
        result = result.filter(el => el.name.toLowerCase().includes(filter.name.toLowerCase()));
      }
      if (filter.crm){
        result = result.filter(el => el?.crm === filter.crm)
      }
      setData(result);
    }).catch(() => {
      
    });
  }

  const handleGoToTask = (row = null) => {
    if (row) {
      history.push(`/users/${row.username}`);
    } else {
      history.push(`/users/new`);
    }
  }

  const Title = () => {
    return (
      <>
        <Typography variant='h5'>Lista dos médicos</Typography>
        <SearchUser setFilter={setFilter}/>
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
            actions={
              <Button startIcon={<ControlPointIcon />} variant="contained" color="primary" onClick={()=>handleGoToTask()}>
                Novo cadastro
              </Button>
            }
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default DatatableComponent;
