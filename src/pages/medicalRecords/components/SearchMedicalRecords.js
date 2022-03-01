import React, {useState} from 'react';

import {
  Card,
  Button,
  TextField,
  Grid,
  CardContent,
  makeStyles
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
     backgroundColor: 'white',
     width: '350px',
     '& input': {
       height: '11px',
       fontSize: 'smaller',
     }
   },
}));

const SearchMedicalRecords = ({setFilter}) => {
  const classes = useStyles();
  const [name, setName] = useState('');

  return (
      <Card className={classes.filterCard} style={{backgroundColor: '#F3F6F4', width: '500px', display: 'flex'}}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item lg={10}>
              <TextField
                className={classes.filterTextInput}
                size="small"
                label='Qualquer parte do nome'
                onChange={event => setName(event.target.value)}
                value={name}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={2} >
              <Button 
                className={classes.filterButton}
                size="small"
                variant="outlined" 
                color="primary"
                onClick={()=>setFilter({
                  name,
                })}
                >
                  Filtrar</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  );
}

export default SearchMedicalRecords;