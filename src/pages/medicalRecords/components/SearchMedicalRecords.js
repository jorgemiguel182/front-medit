import React, {useState} from 'react';
import {useSnackbar} from 'notistack';
import {
  Card,
  Button,
  TextField,
  Grid,
  CardContent,
  makeStyles,
  CircularProgress
} from '@material-ui/core';

const useStyles = makeStyles(()=> ({
  filterCard: {
    marginBlock: '10px',
    borderRadius: '20px',
    height: '60px'
  },
  filterSelect: {
    height: '28px',
    backgroundColor: 'white',
    fontSize: 'small'
  },
  filterButton: {
    height: '28px'
  },
  filterTextInput: {
    '& .MuiInputLabel-root': {
       fontSize: 'small',
       marginBlockStart: '-4px'
     },
     height: '26px',
     backgroundColor: 'aliceblue',
     '& input': {
       height: '11px',
       fontSize: 'smaller',
     }
   },
  filterDateInput: {
     height: '28px',
     backgroundColor: 'aliceblue',
     '& input': {
      height: '11px',
      fontSize: 'smaller',
    }
   },
}));

const SearchMedicalRecords = ({setFilter, loading}) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
      <Card className={classes.filterCard} style={{backgroundColor: '#F3F6F4', width: '700px', display: 'flex'}}>
        <CardContent style={{width: 'inherit'}}>
          <Grid container spacing={0}>
            <Grid item lg={3} style={{marginInlineEnd: '20px'}}>
              <TextField
                className={classes.filterTextInput}
                size="small"
                label='Qualquer parte do nome'
                onChange={event => setName(event.target.value)}
                value={name}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={3}>
              <TextField
                className={classes.filterDateInput}
                type="date"
                size="small"
                label='Data inicial'
                onChange={event => {
                  setStartDate(event.target.value)
                }}
                onBlur={event => {
                  if (endDate === '' || endDate < startDate) {
                    setEndDate(event.target.value)
                  }
                }}
                value={startDate}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item lg={3}>
              <TextField
                className={classes.filterDateInput}
                type="date"
                size="small"
                label='Data final'
                onChange={event => setEndDate(event.target.value)}
                onBlur={event => {
                  if (endDate < startDate) {
                    enqueueSnackbar('Data final foi modificada, visto que não pode ser menor que a inicial', {variant: 'warning'});
                    setEndDate(startDate)
                  }
                }}
                value={endDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={1} >
              {loading ? (
                <Button
                  style={{width: '72px'}}
                  color="primary"
                  variant="outlined"
                >
                  <CircularProgress size={15} style={{color: '#02255C'}} />
                </Button>
              ):(
                <Button 
                  className={classes.filterButton}
                  size="small"
                  variant="outlined" 
                  color="primary"
                  onClick={()=>setFilter({
                    name,
                    startDate,
                    endDate
                  })}
                  >
                    Filtrar
                </Button>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  );
}

export default SearchMedicalRecords;