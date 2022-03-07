import React, {useState} from 'react';

import {
  Card,
  Button,
  TextField,
  Grid,
  CardContent,
  CircularProgress,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(()=> ({
  filterCard: {
    marginBlock: '10px',
    borderRadius: '20px',
    height: '60px'
  },
  filterButton: {
    height: '28px'
  },
  filterTextInput: {
    '& .MuiInputLabel-root': {
       fontSize: 'small',
       marginBlockStart: '-4px'
     },
     height: '27px',
     backgroundColor: 'white',
     width: '250px',
     '& input': {
       height: '11px',
       fontSize: 'smaller',
     }
   },
}));

const SearchPacient = ({setFilter, loadingSearch}) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [crm, setCrm] = useState('');

  return (
      <Card className={classes.filterCard} style={{backgroundColor: '#F3F6F4', width: '533px', display: 'flex'}}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item lg={7}>
              <TextField
                className={classes.filterTextInput}
                size="small"
                fullWidth
                label='Qualquer parte do nome'
                onChange={event => setName(event.target.value)}
                value={name}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                className={classes.filterTextInput}
                size="small"
                fullWidth
                label='CRM'
                onChange={event => setCrm(event.target.value)}
                value={crm}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={1} style={{marginInlinStart: '65px'}}>
              {loadingSearch ? (
                <Button
                style={{width: '72px'}}
                color="primary"
                variant="outlined"
                >
                  <CircularProgress size={15} style={{color: '#02255C'}} />
                </Button>
              )
              : (
                <Button 
                className={classes.filterButton}
                size="small"
                variant="outlined" 
                color="primary"
                onClick={()=>setFilter({
                  name,
                  crm
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

export default SearchPacient;