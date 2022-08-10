import React, { useState } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import {
  Box, Card, Button, Typography, CircularProgress
} from '@material-ui/core';
import DataTable from 'react-data-table-component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import GetAppIcon from '@material-ui/icons/GetApp';
import SearchMedicalRecords from './SearchMedicalRecords';
import downloadMedicalRecords from 'src/utils/downloadMedicalRecords';

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


const DatatableComponent = ({handleOpen, handleSearch, data, setFilter, filter, loading, handleDownload}) => {

  const history = useHistory();
  const [loadingDownload, setLoadingDownload] = useState(false);
  const showDownloadButton = filter.startDate && filter.endDate && filter.name === '';

  const goToEvolution = (row) => {
    history.push(`/evolutions/${row.id}`);
  }

  // const handleGoToNew = () => {
  //   history.push('/prontuarios/new');
  // }

  const Title = () => {
    return (
      <div style={{height: '123px'}}>
        <Typography variant='h5'>Lista de prontuários</Typography>
        <SearchMedicalRecords setFilter={setFilter} loading={loading} />
      </div>

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
             <div style={{display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-end", marginBlockStart: showDownloadButton ? '40px' : '0px' }}>
              <Button startIcon={<ControlPointIcon />} variant="contained" color="primary" onClick={e => handleOpen(true)}>
                Novo prontuário
              </Button>
              { showDownloadButton && (
              <Button startIcon={loadingDownload ? <CircularProgress size={20} style={{color: 'white'}} /> : <GetAppIcon /> } variant="contained" color="primary" onClick={e => downloadMedicalRecords.handleDownload(setLoadingDownload, filter.startDate, filter.endDate)}>
                Download
              </Button>
              )}
            </div> 
            }
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default DatatableComponent;
