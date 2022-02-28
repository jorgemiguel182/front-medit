import React, {useEffect, useState} from 'react';

import {
  Card,
  Button,
  TextField,
  Grid,
  CardContent,
  Select,
  option,
  FormControl,
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
     height: '25px',
     backgroundColor: 'white',
     width: '250px',
     '& input': {
       height: '10px',
       fontSize: 'smaller',
     }
   },
}));

const SearchPacient = ({setFilter}) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  return (
      <Card className={classes.filterCard} style={{backgroundColor: '#F3F6F4', width: '515px', display: 'flex'}}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item lg={5}>
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
            <Grid item lg={5}>
                <FormControl>
                  <Select
                    className={classes.filterSelect}
                    style={{fontSize: 'small'}}
                    native
                    size="small"
                    variant='outlined'
                    name="medicine_before_treatment"
                    onChange={event => setStatus(event.target.value)}
                    value={status}
                  >
                    <option value="">Todos Status</option>
                    <option value="paid">Pendente prontuário</option>
                    <option value="answered">Pendente pagamento</option>
                    <option value="done">Prontuário cadastrado</option>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item lg={1} style={{marginInlinStart: '65px'}}>
              <Button 
                className={classes.filterButton}
                size="small"
                variant="outlined" 
                color="primary"
                onClick={()=>setFilter({
                  name,
                  status
                })}
                >
                  Filtrar</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  );
}

export default SearchPacient;